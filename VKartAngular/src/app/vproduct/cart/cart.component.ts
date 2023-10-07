import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/product.model';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:Product[];
  
  //DI
  constructor(private proservice:ProductService) { 
    this.products=this.proservice.cart;
   // console.log(this.products.values)
  }
  grandTotal:number = 0;

  
    
  
  
     

  
  ngOnInit() {
  }
}
