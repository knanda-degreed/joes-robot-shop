import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: IProduct[] = [];

  add(product: IProduct) {
    this.cart.push(product);
    console.log("Added to cart: " + product.name);
  }

  constructor() { }
}
