import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  storeProduct:Product[]=[];


  onAddnewProduct(newProduct:Product)
  {
    this.storeProduct.push(newProduct);
    console.log(newProduct);
  }
}
