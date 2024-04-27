import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { TextPipe } from '../../pipes/text.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart.client',
  standalone: true,
  imports: [NgOptimizedImage, TextPipe, RouterLink],
  template: `
    <div class="py-10">
      <div class="px-10">
        @if (getPrdcts() == null || getPrdctsQty() == 0) {
        <h1 class="text-center text-slate-600 text-xl">Cart is empty</h1>
        <div class="text-center select-none hover:underline" routerLink="">
          Return Shopping
        </div>
        }@else {
        <div class="grid grid-cols-6 ">
          <div class="text-center">Product Image</div>
          <div class="text-center">Product Name</div>
          <div class="text-center">Product Brand</div>
          <div class="text-center">Product Quantity</div>
          <div class="text-center">Product Price</div>
          <div></div>
        </div>
        @for (proc of getPrdcts(); track $index) {
        <div
          class="grid grid-cols-6 mt-3 border-t-[1.2px] border-b-[1.2px] py-2"
        >
          <div class="flex items-center justify-center">
            <div
              class="aspect-square w-[45px] border flex items-center justify-center px-2"
            >
              <img
                ngSrc="{{ proc.images[0].image }}"
                priority
                width="45"
                height="45"
                alt=""
              />
            </div>
          </div>
          <div
            class="text-center flex items-center justify-center text-slate-500"
          >
            {{ proc.name | text }}
          </div>
          <div
            class="text-center flex items-center justify-center text-slate-500"
          >
            {{ proc.brand }}
          </div>
          <div class="text-center text-amber-500 ">{{ proc.price }} ₺</div>
          <div class="flex items-center justify-center">
            <div class="flex gap-3">
              <div
                (click)="handleQuantityDecrease(proc)"
                class=" w-[30px] flex items-center justify-center border rounded-md border-teal-500 cursor-pointer select-none"
              >
                -
              </div>
              <div class="w-[30px] text-center text-slate-500 select-none">
                {{ proc.quantity }}
              </div>
              <div
                (click)="handleQuantityIncrease(proc)"
                class=" w-[30px] flex items-center justify-center border border-teal-500 rounded-md cursor-pointer select-none"
              >
                +
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <div
              (click)="handleDeleteFromBasket(proc)"
              class="
              w-[120px] border 
              text-center px-3 py-2 
              rounded-md cursor-pointer
             bg-black text-white
             hover:font-bold
               "
            >
              Delete
            </div>
          </div>
        </div>
        }
        <div class="flex items-center justify-between mt-6">
          <div
            (click)="handleClearBasket()"
            class="
          px-3 py-2
          border
          border-white
           rounded-md 
           cursor-pointer
           text-slate-500
           hover:border-rose-500
           transition
           duration-300
           "
          >
            Remove Basket
          </div>
          <div class="px-3 py-2">
            <div class="flex items-center justify-center gap-2">
              <div class="text-slate-500">Total Price:</div>
              <span class="text-sm text-orange-500"
                >{{ getTotalPrice() }}₺</span
              >
            </div>
            <hr />
            <div class="flex items-center gap-2">
              <span class="text-slate-400 material-symbols-outlined">
                arrow_left_alt
              </span>
              <span
                class="text-slate-500 hover:underline cursor-pointer"
                routerLink=""
              >
                return shopping</span
              >
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  `,
})
export class CartClientComponent {
  constructor(private cartService: CartService) {}

  public handleDeleteFromBasket(product: any) {
    this.cartService.handleDeleteFromBasket(product);
  }
  public handleQuantityIncrease(product: any) {
    this.cartService.handleQuantityIncrease(product);
  }
  public handleQuantityDecrease(product: any) {
    this.cartService.handleQuantityDecrease(product);
  }
  public handleClearBasket() {
    this.cartService.handleClearBasket();
  }
  public getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
  public getPrdcts(): any[] {
    return this.cartService.getProducts;
  }
  public getPrdctsQty(): number {
    return this.cartService.getPrdctsQty;
  }
}
