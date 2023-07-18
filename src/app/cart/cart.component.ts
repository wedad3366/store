import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts:any=[];
  total:number=0;
  success:boolean=false;
  orderedProduct:any=[]
  constructor(private _servise:ServiceService) { }

  ngOnInit(): void {
    this.getProductCart()
  }

  getProductCart() {
    if("cart" in localStorage)
    {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!) // ! to skip null
      console.log(this.cartProducts)
    }
    this.getTotalInCart();
  }

  addAmount(index:number)
  {
    this.cartProducts[index].quantity++
    this.getTotalInCart();
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }

  minsAmount(index:number)
  {
    this.cartProducts[index].quantity--
    this.getTotalInCart();
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }

  detectChange()
  {
    this.getTotalInCart();
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }

  deleteProduct(index:number)
  {
    this.cartProducts.splice(index,1)
    this.getTotalInCart();
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }
  
  clearCart()
  {
    this.cartProducts =[]
    this.getTotalInCart();
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }

  getTotalInCart()
  {
    this.total=0
    for(let x in this.cartProducts)
    {
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }
 
  addNewOrder()
  {
    let products = this.cartProducts.map((item:any) =>{
      return {productId:item.item.id,quantity:item.quantity}
    })
    let model =
    {
      userId:3,
      date : new Date(),
      products : products
    }

    this._servise.addNewOrder(model).subscribe(data =>{
      this.success = true
      console.log(data)
      if("ordered" in localStorage)
      {
        this.orderedProduct = JSON.parse(localStorage.getItem("ordered")!) // ! to skip null
        this.orderedProduct.push(data)
        localStorage.setItem("ordered" , JSON.stringify(this.orderedProduct))
      }
      else{
        this.orderedProduct.push(data)
        localStorage.setItem("ordered" , JSON.stringify(this.orderedProduct))
      }
    }
      )
   
      this.clearCart()

  }

}
