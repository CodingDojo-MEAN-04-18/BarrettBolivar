import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
import { Products } from './../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct: Products = new Products();
  products: Array<Products>;

  constructor(
    private _produceService: ProductsService,
    private _router: Router
  ) {
    this._produceService.products.subscribe( (products) => {
      this.products = products;
    })
  }

  ngOnInit() {
    this.newProduct = new Products();
  }

  create() {
    if (this.newProduct.img.length < 1) {
      this.newProduct.img = null;
    }
    this.products.push(this.newProduct);
    this._produceService.updateProducts(this.products);
    this.newProduct = new Products();
    console.log('new', this.newProduct);
    console.log('array', this.products);
    
  }

}
