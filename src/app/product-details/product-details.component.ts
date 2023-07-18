import { Component, OnInit ,Output , EventEmitter, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
id:any;
productById:any={};
loading:boolean=false;
buttonAdd:boolean=false;
buttonAdd2:boolean=false;
cartProducts:any=[];
favoriteProducts:any=[];
amount:number=0;
selectionItem:any=[]
numberOfPiece:any
rate:any


  constructor(private route:ActivatedRoute,private _service:ServiceService,private wowService: NgwWowService,) {
    this.id = this.route.snapshot.paramMap.get("id")

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

  ngAfterViewInit()
  {   
    this.loading=true;
    this._service.getProductById(this.id).subscribe(data =>{
    this.productById=data
    this.numberOfPiece=data.rating.count
    this.rate=data.rating.rate
    this.loading=false;
     console.log(this.productById)
    },
     error =>
    {
      this.loading=false;
      alert("error")
    }
    )

  }

  addToCart(event:any)
  {
    this.selectionItem = ({item:this.productById,quantity:this.amount});
    event = this.selectionItem;

    if("cart" in localStorage)
    {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!) // ! to skip null
      let existProduct = this.cartProducts.find((productById:any) => productById.item.id == event.item.id)
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


  addToFavorite(event:any)
  {
    this.buttonAdd2=true;

    this.selectionItem = this.productById;
    event = this.selectionItem;

    if("favorite" in localStorage)
    {
      this.favoriteProducts = JSON.parse(localStorage.getItem("favorite")!) // ! to skip null
      let existProduct = this.favoriteProducts.find((productById:any) => productById.id == event.id)
      if(existProduct)
      {
        alert("product is already in your favorite")
      }
      else
      {
        this.favoriteProducts.push(event)
        localStorage.setItem("favorite" , JSON.stringify(this.favoriteProducts))
      }
    }
    else{
      this.favoriteProducts.push(event)
      localStorage.setItem("favorite" , JSON.stringify(this.favoriteProducts))
    }
  
  }
  
  deletFromFavorite()
  {
    this.buttonAdd2=false;
     let index =  this.favoriteProducts.id
     this.favoriteProducts.splice(index,1)
     localStorage.setItem("favorite" , JSON.stringify(this.favoriteProducts))
  }

 
 
}
