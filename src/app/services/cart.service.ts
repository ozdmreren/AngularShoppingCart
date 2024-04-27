import { Injectable } from '@angular/core';
import { products } from '../../../utils/Products';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private toastr: ToastrService) {
    const getProducts = localStorage.getItem('AngularBasicCart');
    if (getProducts) {
      const converted_products = JSON.parse(getProducts);
      this.main_products = converted_products;
    }
  }

  private main_products: any[];
  private prdct: any;
  private main_products_count;

  public handleQuantityIncrease(product: any) {
    if (product.quantity < 100) {
      product.quantity += 1;
      if (this.main_products) {
        let existingIndex = this.main_products.findIndex(
          (item) => item.id == product.id
        );
        if (existingIndex != -1) {
          this.main_products[existingIndex] = product;
          localStorage.setItem(
            'AngularBasicCart',
            JSON.stringify(this.main_products)
          );
        }
      }
    } else {
      this.toastr.warning('Not more than 100');
    }
  }
  public handleQuantityDecrease(product: any) {
    if (product.quantity > 1) {
      product.quantity -= 1;
      if (this.main_products) {
        let existingIndex = this.main_products.findIndex(
          (item) => item.id == product.id
        );
        if (existingIndex != -1) {
          this.main_products[existingIndex] = product;
          localStorage.setItem(
            'AngularBasicCart',
            JSON.stringify(this.main_products)
          );
        }
      }
    } else {
      this.toastr.warning('Not less than 1');
    }
  }
  public handleAddToBasket(product: any) {
    let updatedCart;
    if (!this.main_products) {
      updatedCart = [product];
      this.main_products = updatedCart;
    } else {
      this.main_products = [...this.main_products, product];
    }
    this.toastr.success('Product added to basket');
    localStorage.setItem(
      'AngularBasicCart',
      JSON.stringify(this.main_products)
    );
  }

  public handleDeleteFromBasket(product: any) {
    let updatedCart;
    updatedCart = this.main_products.filter((item) => item.id !== product.id);
    this.main_products = updatedCart;
    this.toastr.show('Product removed');
    localStorage.setItem('AngularBasicCart', JSON.stringify(updatedCart));
  }

  public handleClearBasket() {
    if (this.main_products) {
      this.main_products = null;
      localStorage.setItem(
        'AngularBasicCart',
        JSON.stringify(this.main_products)
      );
    }
  }

  public isExistItem?(product: any): boolean {
    if (this.main_products) {
      const existingItem = this.main_products.find(
        (item) => item.id == product.id
      );
      return existingItem;
    } else {
      return false;
    }
  }

  public getTotalPrice(): number {
    let totalPrice = 0;
    if (this.main_products) {
      totalPrice = this.main_products.reduce(
        (total, item) => (total += item.price * item.quantity),
        0
      );
    }
    return totalPrice;
  }

  public get getProducts() {
    if (this.main_products) {
      return this.main_products;
    }
    return null;
  }
  public get getPrdctsQty() {
    this.main_products_count = 0;
    if (this.main_products) {
      this.main_products_count = this.main_products.length;
      return this.main_products_count;
    } else {
      this.main_products_count;
    }
  }
}
