import { Injectable } from '@angular/core';
import { Products } from './products';
import { BehaviorSubject } from 'Rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = new BehaviorSubject(null);
  constructor() { }
  updateProducts(product: Array<Products>) {
    this.products.next(product);
  }
}
