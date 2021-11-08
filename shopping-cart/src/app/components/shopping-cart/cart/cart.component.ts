import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems =[
      //  {id:1 , productId:1,productName:'Test 1', qty:4,price:100 },
      //  {id:1 , productId:2,productName:'Test 1', qty:4,price:50 },
      //  {id:1 , productId:3,productName:'Test 1', qty:4,price:150 },
      //  {id:1 , productId:4,productName:'Test 1', qty:4,price:200 }


  ];

  cartTotal=0

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {


      this.msg.getMsg().subscribe((product : Product)=>{
          
        this.addProductToCard(product);
             
      }) ;


   
     
  }


  addProductToCard(product :Product){

    this.cartItems.push({
              
      productid:product.id,
      productName: product.name,
      qty:1,
      price:product.price


     })

     this.cartTotal=0;
     this.cartItems.forEach(item =>{ 
     this.cartTotal += (item.qty * item.price)})


  }

}
