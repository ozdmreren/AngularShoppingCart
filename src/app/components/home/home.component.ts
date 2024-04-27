import { Component } from '@angular/core';
import { ProductsComponent } from './products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent],
  template: `
    <div>
      <app-products />
    </div>
  `,
})
export class HomeComponent {}
