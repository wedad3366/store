import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent implements OnInit {

  orderedItems:any=[]
  lenghtOfArray:any

  constructor(private _service:ServiceService) { }

  ngOnInit(): void {
    this.getOrderedProduct()
    console.log(this.orderedItems)
  }

    
  getOrderedProduct() {
    
    if("ordered" in localStorage)
    {
      this.orderedItems = JSON.parse(localStorage.getItem("ordered")!) // ! to skip null

      this.lenghtOfArray=this.orderedItems.map((item:any)=>
      {
        let length , date
        length=item?.products.length
        date=item?.date
          
         return {length:length,
        date:date}
       
      })

      console.log(this.lenghtOfArray)
    }
  }



}
