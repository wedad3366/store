import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products:any=[];
  categories:any=[];
  loading:boolean=false;
  cartProducts:any=[];

  constructor(private wowService: NgwWowService,private _service:ServiceService) { 
    this.wowService.init(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       100,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
      }
    );
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.loading=true;

    this._service.getAllProducts().subscribe(data => {
      this.products=data
      this.loading=false;
     
    } , error =>
    {
      this.loading=false;
      alert("error")
    })

    this._service.getAllCategories().subscribe(data => {
      this.categories=data
      this.loading=false;
      console.log(this.categories)
    } , error =>
    {
      this.loading=false;
      alert("error")
    })
  }

  filterCategory(event:any)
  {
    this.loading=true;
    let value =event.target.value;
    this._service.getProductByCategory(value).subscribe(data => {
      if(value == "all")
      {
        this._service.getAllProducts().subscribe(data => {
          this.products=data
          this.loading=false;
          console.log(this.products)
         
        } , error =>
        {
          this.loading=false;
          alert("error")
        })
      }
      else
      {
        this.products=data
        this.loading=false;
        console.log(this.products)
      }
    } , error =>
    {
      this.loading=false;
      alert("error")
    })

    console.log(value);
  }

 
  addToCart(event:any)
  {
    if("cart" in localStorage)
    {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!) // ! to skip null
      let existProduct = this.cartProducts.find((item:any) => item.item.id == event.item.id)
      if(existProduct)
      {
        alert("product is already in your cart")
      }
      else
      {
        this.cartProducts.push(event)
        localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
      }
    }
    else{
      this.cartProducts.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
    }
  }

}
