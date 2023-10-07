import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './vproduct/product/product.component';
import { ProductlistComponent } from './vproduct/productlist/productlist.component';
import { ProductcreateComponent } from './vproduct/productcreate/productcreate.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './vproduct/home/home.component';
import { PagenotfoundComponent } from './vproduct/pagenotfound/pagenotfound.component';
import { CartComponent } from './vproduct/cart/cart.component';
import { ProductdetailComponent } from './vproduct/productdetail/productdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductlistComponent,
    ProductcreateComponent,
    HomeComponent,
    PagenotfoundComponent,
    CartComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
