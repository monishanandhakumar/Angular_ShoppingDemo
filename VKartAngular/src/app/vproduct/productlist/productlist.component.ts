import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/model/product.model';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private productserviceobject:ProductService) { }

  ngOnInit(): void {

    this.getProducts();
  }
 
 // @Input() productarr:Product[] =[];

  /*productarr:Product[]=[
    new Product(1,"parent-OPPOA17","https://cdn1.smartprix.com/rx-ibsJ2hNrF-w420-h420/apple-iphone-14-256g.webp",
  "New Release",10,300000,["GoodProduct","Excellent Quality"]),
  new Product(2,"parent-Apple","https://cdn1.smartprix.com/rx-ibsJ2hNrF-w420-h420/apple-iphone-14-256g.webp",
  "New Release",16,40000,["GoodProduct","Excellent Quality"]),
  new Product(3,"parent-Pixel4A","https://cdn1.smartprix.com/rx-ibsJ2hNrF-w420-h420/apple-iphone-14-256g.webp",
  "New Release",10,24000,["GoodProduct","Excellent Quality"])
  ];*/
  productarr:Product[] =[];

  getProducts()
  {
  this.productarr =  this.productserviceobject.getProducts();
  }

  addToCart(id:number)
  {

  console.log(id);
  //2
  //fetching the product info for the particular pid
  let product:Product;
 product  = this.productserviceobject.getParticularProduct(id);
  console.log("add to cart:",product)
 //adding to the cart
  this.productserviceobject.addToCartService(product)
  alert("Product added to Cart!!")
   
}
    
}
