import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
import { Products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Products> = [];

  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    console.log(this.products);
    
    this._productService.products.subscribe( (products) => {
      this.products = products;
    });
  }

  deleteProduct(product) {
    const idx = this.products.indexOf(product);
    this.products.splice(idx, 1);
    this._productService.updateProducts(this.products);
  }

}
