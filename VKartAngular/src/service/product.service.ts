import { Injectable } from '@angular/core';
import { Product } from 'src/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  cart:Product[] =[];

  constructor() { }


  productarr:Product[]=[
    new Product(1,"IPhone","https://cdn1.smartprix.com/rx-ibsJ2hNrF-w420-h420/apple-iphone-14-256g.webp",
  "New Release",10,30000,["GoodProduct","Excellent Quality"]),
  new Product(2,"One+","https://mobilegoo.shop/cdn/shop/products/Untitleddesign-2023-04-15T113246.365.jpg?v=1681538946&width=713",
  "New Release",16,40000,["GoodProduct","Excellent Quality"]),
  new Product(3,"Pixel4A","https://cdn1.smartprix.com/rx-iKnDmaKTL-w1200-h1200/KnDmaKTL.jpg",
  "New Release",10,24000,["GoodProduct","Excellent Quality"])
  ];

  //get all products
  getProducts()
  {
           //rest parameter
    return [...this.productarr];
  }

  //Adding to the array
  addProduct(id:number,title:string,description:string,imagepath:string,quantity:number,price:number)
  {
    let comments:string[]= ["no comments"];
     const product={id:id,title:title,description:description,imagepath:imagepath,quantity:quantity,price:price,comments:comments};
    this.productarr.push(product)
    console.log(this.productarr)
  }
  //getting the particular product
  getParticularProduct(id:number)
  {
    debugger;
     let productinfo:any;
    for(let index=0 ;index<this.productarr.length;index++)
    {
      if(this.productarr[index].id == id)
      {
        productinfo=this.productarr[index];
      }
    
    }
    return productinfo;
  }

  //Cart

     //adding to cart
     public addToCartService(product:Product)
     {
       //If the product already exist in cart adding quantity alone
       let flag=0;
       for (let index = 0; index <this.cart.length; index++) {
           if(this.cart[index].id == product.id)
           {
              flag = 1;
              this.cart[index].quantity++;
              break;
           }  
       }
     
       //If Product not exist in cart add the product to cart
       if(flag ==0)
       this.cart.push(product);
   
       //to reduce the original quantity in products array
   for (let index = 0; index <this.productarr.length; index++) {
       if(this.productarr[index].id == product.id)
       {
           this.productarr[index].quantity--;
       }  
   }
   //below is the end of add to cart method
     }  
}
