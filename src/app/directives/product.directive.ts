import { Directive, HostListener } from '@angular/core';
import { ProductsComponent } from '../components/home/products.component';

@Directive({
  selector: '[appProduct]',
  standalone: true,
})
export class ProductDirective {
  constructor(private comp: ProductsComponent) {}

  @HostListener('click')
  click() {
    this.comp.openMenu = !this.comp.openMenu;
  }
}
