import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Products } from '../products';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  products: Array<Products>;
  product: Products;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductsService,
    private _router: Router
  ) {

    this._productService.products
    .subscribe( (products) => {
      this.products = products;
    });

    this._route.params
    .subscribe( param => {
      for (let idx = 0; idx < this.products.length; idx++) {
        if (this.products[idx].id == param.id) {
          this.product = this.products[idx];
          break;
        }
      }
    });
  }

  ngOnInit() {
  }
  
  update(){
    this._productService.updateProducts(this.products);
    this._router.navigate(['/products']);
  }

}
