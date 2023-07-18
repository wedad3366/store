import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favoriteProducts:any=[];
  constructor() { }

  ngOnInit(): void {
    this.getProductFavorite();
  }

  getProductFavorite() {
    if("favorite" in localStorage)
    {
      this.favoriteProducts = JSON.parse(localStorage.getItem("favorite")!) // ! to skip null
      console.log(this.favoriteProducts)
    }
  }

  deleteProduct(index:number)
  {
    this.favoriteProducts.splice(index,1)
    localStorage.setItem("favorite" , JSON.stringify(this.favoriteProducts))
  }

}
