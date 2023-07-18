import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { MyOrderComponent } from './my-order/my-order.component';

const routes: Routes = [
  {path:"products" , component:AllProductsComponent},
  {path:"details/:id" , component:ProductDetailsComponent},
  {path:"cart" , component:CartComponent},
  {path:"home" , component:HomeComponent},
  {path:"favorite" , component:FavoriteComponent},
  {path:"myOrders" , component:MyOrderComponent},
  {path:"**" , redirectTo:"home" , pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
