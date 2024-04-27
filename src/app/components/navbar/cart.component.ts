import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div>
      <div
        class="
        border px-2 py-1 
        flex items-center justify-center 
        relative
        rounded-md
        transition
        duration-300
        hover:scale-110
        hover:-rotate-12
        hover:border-amber-500
        select-none
        cursor-pointer
       "
        routerLink="cart"
      >
        <span class="material-symbols-outlined"> shopping_cart </span>
        <div class="absolute -top-2 -right-2">{{ getPrdctsQty() }}</div>
      </div>
    </div>
  `,
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  public getPrdctsQty(): number {
    return this.cartService.getPrdctsQty;
  }
}
