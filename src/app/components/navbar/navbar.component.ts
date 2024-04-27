import { Component } from '@angular/core';
import { CartComponent } from './cart.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CartComponent, RouterLink],
  template: `
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
    />
    <div class="py-4 bg-slate-300 text-sm">
      <div
        class="max-w-[1920px]
      xl:px-20
      md:px-4
      px-4
      "
      >
        <div class="flex items-center justify-between gap-3 md:gap-0">
          <div class="px-5 cursor-pointer select-none" routerLink="">Logo</div>
          <div
            class="w-full
           px-4 py-2
           text-slate-700
           "
          >
            <input
              class="outline-none
               w-full
               px-3 py-2
               rounded-md
               "
              type="text"
              placeholder="Arama Çubuğu"
            />
          </div>
          <div class="flex items-center gap-3">
            <div><app-cart /></div>
            <div>Avatar</div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class NavbarComponent {}
