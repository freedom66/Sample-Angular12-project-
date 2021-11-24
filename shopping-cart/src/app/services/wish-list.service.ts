import { Injectable } from '@angular/core';
import  {wishlistUrl} from 'src/app/config/api';
import {HttpClient}  from '@angular/common/http';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private http: HttpClient) { }


  getWishList() {}

  addToWishList(productId) {
   
    return this.http.post(wishlistUrl, {id:productId})


  }


  removeFromWishlist(productId){

    return this.http.delete(wishlistUrl+ '/' + productId   )


  }
}
