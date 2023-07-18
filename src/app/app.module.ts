import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SelectComponent } from './select/select.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { MyOrderComponent } from './my-order/my-order.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    HeaderComponent,
    FooterComponent,
    SelectComponent,
    SpinnerComponent,
    ProductComponent,
    FavoriteComponent,
    MyOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
