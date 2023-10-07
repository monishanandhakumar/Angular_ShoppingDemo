import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/model/product.model';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {
id: any;

  constructor(private productserviceobject:ProductService,private router: Router) { }

  ngOnInit(): void {
  }
  
  //To emit the data to parent component
 /* @Output() addnewproduct =new EventEmitter<Product>();
  onAddNewProduct(productForm:NgForm)
   {
     let newproduct=new Product(productForm.value.id,productForm.value.title,productForm.value.imagepath,productForm.value.description,productForm.value.quantity,productForm.value.price);
    console.log(newproduct);
     this.addnewproduct.emit(newproduct);
   }*/

   onAddNewProduct(productForm:NgForm)
   {

      this.productserviceobject.addProduct(productForm.value.id,productForm.value.title,productForm.value.description,productForm.value.imagepath,
        productForm.value.quantity,productForm.value.price);
        alert("Product Added!!")
        this.router.navigate(['products']);
   }
}
