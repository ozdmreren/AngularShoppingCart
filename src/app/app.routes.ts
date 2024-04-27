import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartClientComponent } from './components/cart.client/cart.client.component';

export const routes: Routes = [
  { path: ``, component: HomeComponent },
  { path: 'cart', component: CartClientComponent },
];
