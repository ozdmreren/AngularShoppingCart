import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductDirective } from '../../directives/product.directive';
import { products } from '../../../../utils/Products';
import { CartService } from '../../services/cart.service';
import { TextPipe } from '../../pipes/text.pipe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgOptimizedImage, ProductDirective, NgClass, TextPipe],
  template: `
    @if (openMenu) {
    <div
      class="w-full min-h-screen 
        absolute
        inset-0
        flex
        z-30
        items-center
        justify-center
        "
    >
      <div
        class="w-[500px] h-[500px] px-3 py-2 border-[1.2px] bg-slate-200 shadow-lg rounded-md"
      >
        <div class="flex gap-3 px-2 py-3">
          <div
            class="aspect-square 
          select-none 
          rounded-md
          "
          >
            <img
              ngSrc="{{ product.images[0].image }}"
              priority
              width="200"
              height="1"
              alt=""
              class="bg-slate-200
              hover:scale-105
              transition
              duration-300"
            />
          </div>
          <div class="w-1/2 flex flex-col px-2 py-1 space-y-3">
            <div>
              <span class="text-lg">Product Name:</span>
              <span class="text-sm text-slate-500"> {{ product.name }}</span>
            </div>
            <div>
              <span>Product Brand</span>:
              <span class="text-sm text-slate-500">{{ product.brand }}</span>
            </div>
            <div>
              Product Price:
              <span class="text-sm text-orange-500">{{ product.price }}₺</span>
            </div>
            <div class="flex gap-3">
              Quantity:
              <div class="flex gap-2">
                <div
                  (click)="handleQuantityDecrease()"
                  class="px-2 border rounded-md border-teal-500 cursor-pointer select-none"
                >
                  -
                </div>
                <div>{{ product.quantity }}</div>
                <div
                  (click)="handleQuantityIncrease()"
                  class=" px-2 border border-teal-500 rounded-md cursor-pointer select-none"
                >
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-around gap-3 mt-3 space-y-3">
          @if (!isExistItem()) {
          <div
            (click)="handleAddToBasket()"
            class="flex items-center justify-center 
            w-[120px] 
            px-1 py-2 
            border rounded-md
             bg-teal-500
             hover:bg-teal-600
             hover:text-white
             transition-colors
             duration-300
             cursor-pointer
             "
          >
            Add To Basket
          </div>
          }@else {
          <div
            class="flex items-center justify-center 
            w-[120px] 
            px-1 py-2 
            border-[1.2px]
            border-slate-400
            text-center
            hover:text-slate-400
            select-none
            rounded-md
            text-sm
            text-white
             transition-colors
             duration-300
             "
          >
            Product already in basket
          </div>
          }
          <div
            appProduct
            class="flex items-center justify-center 
            w-[120px] px-1 py-2 
            border rounded-md
             bg-rose-500 
             cursor-pointer
             hover:bg-rose-700
             hover:text-white 
               transition-colors
               duration-300
               "
          >
            Close
          </div>
        </div>
      </div>
    </div>
    }
    <div
      class="
      py-4
      grid
    grid-cols-4
    md:gap-10
    xl:gap-20
    gap:4
    md:px-6
    xl:px-10
    px-2
    "
    >
      @for (proc of procs; track $index) {
      <div
        class="
      flex flex-col
      items-center
      justify-center
      px-3 py-2
      shadow-md
      cursor-pointer
      rounded-md
      transition
      hover:scale-105
      "
        (click)="handleOpenMenu(proc)"
      >
        <div class="aspect-square flex mb-4 select-none">
          <img
            [ngSrc]="proc.images[0].image"
            priority
            alt=""
            width="200"
            height="1"
            class="object-contain"
          />
        </div>
        <div class="space-y-3 text-center text-sm">
          <div class="text-slate-500">{{ proc.name | text }}</div>
          <div class="text-slate-500">{{ proc.brand }}</div>
          <div class="font-semibold text-lg">{{ proc.price }} ₺</div>
        </div>
      </div>
      }
    </div>
  `,
})
export class ProductsComponent {
  exampleSrc = 'https://m.media-amazon.com/images/I/71p-tHQ0u1L._AC_SX679_.jpg';
  openMenu: boolean = false;
  procs = products;
  product: any;
  inBasket: boolean;

  constructor(
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  public handleQuantityIncrease() {
    this.cartService.handleQuantityIncrease(this.product);
  }
  public handleQuantityDecrease() {
    this.cartService.handleQuantityDecrease(this.product);
  }
  public handleAddToBasket() {
    this.cartService.handleAddToBasket(this.product);
  }
  public handleOpenMenu(product: any) {
    this.openMenu = !this.openMenu;
    this.product = product;
    this.product.quantity = 1;
  }
  public isExistItem(): boolean {
    return this.cartService.isExistItem(this.product);
  }
}
