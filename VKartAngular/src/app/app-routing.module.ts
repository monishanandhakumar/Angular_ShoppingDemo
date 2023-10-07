import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './vproduct/cart/cart.component';
import { HomeComponent } from './vproduct/home/home.component';
import { PagenotfoundComponent } from './vproduct/pagenotfound/pagenotfound.component';
import { ProductComponent } from './vproduct/product/product.component';
import { ProductcreateComponent } from './vproduct/productcreate/productcreate.component';
import { ProductdetailComponent } from './vproduct/productdetail/productdetail.component';
import { ProductlistComponent } from './vproduct/productlist/productlist.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:ProductComponent},
  {path:"products",component:ProductlistComponent},
  {path:"addproduct",component:ProductcreateComponent},
  {path:"cart",component:CartComponent},
  {path:'productinfo/:id',component:ProductdetailComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
