import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  getCartItems():Observable<CartItem[]>{
    
   ///mapping the obtained result to our cart item properties (pipe () and map()) 
   return this.http.get<CartItem[]>(cartUrl);

  }

  addProductToCart(product:Product):Observable<any>{

    console.log(product);
    return this.http.post(cartUrl,{product});

  }
}
