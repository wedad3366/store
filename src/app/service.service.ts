import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http:HttpClient) { }

  getAllProducts() : Observable<any>
  {
    return this._http.get('https://fakestoreapi.com/products');
  }

  getAllCategories() : Observable<any>
  {
    return this._http.get('https://fakestoreapi.com/products/categories');
  }

  getProductByCategory(category:string) : Observable<any>
  {
    return this._http.get('https://fakestoreapi.com/products/category/'+category);
  }
  getProductById(id:any) : Observable<any>
  {
    return this._http.get('https://fakestoreapi.com/products/'+id)
  }

  addNewOrder(model:any)
  {
    return this._http.post('https://fakestoreapi.com/carts',model)
  }

 // getProductByUser(userId:any)
 // {
 //   return this._http.get('https://fakestoreapi.com/carts/user/'+userId)
 // }

}

