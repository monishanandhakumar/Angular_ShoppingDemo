import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Product } from 'src/model/product.model';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private productservice:ProductService) { }
   
  productid:number =0;
  product:any;

  ngOnInit(): void {

      //getting id from url
  
    //getting id from route
    this.route.params.subscribe((pid:Params) =>
    {
        this.productid=+pid['id']; // + to convert string to number;
       
      this.product= this.productservice.getParticularProduct(this.productid);
    });
  }

//add to cart
  addToCart(id:number)
  {

  console.log(id);
  //2
  //fetching the product info for the particular pid
  let product:Product;
 product  = this.productservice.getParticularProduct(id);
  console.log("add to cart:",product)
 //adding to the cart
  this.productservice.addToCartService(product)
  alert("Product added to Cart!!")
   
}
}
