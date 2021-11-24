import { Component, OnInit ,Input} from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute,Router } from '@angular/router';
import { MessengerService } from 'src/app/services/messenger.service';

import { CartService } from 'src/app/services/cart.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

 @Input() productItem:Product
 addedTowishList:boolean=false;

  constructor(private _router:Router , 
    private msg :MessengerService, 
    private cartService: CartService, 
    private wishlistService : WishListService ) 
  { }


  onBackButtonClick(): void {
   
    this._router.navigate(['/test']);
    console.log('Parisa');


  }



  ngOnInit(): void {

  }


  handleAddToCart(){
      ///SEND THE MESSAGE WITH THE CURRENT PRODUCT ITEM INSIDE PRODUCT ITEM COMPONENT
  this.msg.sendMsg(this.productItem)

  }


   // handleAddToCart(){
      ///SEND THE MESSAGE WITH THE CURRENT PRODUCT ITEM INSIDE PRODUCT ITEM COMPONENT
    //  this.cartService.addProductToCart(this.productItem).subscribe(()=>{
      //  this.msg.sendMsg(this.productItem)
     // })
     

    //}


    handleAddToWishlist() {
     this.wishlistService.addToWishList(this.productItem.id).subscribe(()=>{

        this. addedTowishList=true;



     })

    }

    handleRemoveFrowishList(){
      this.wishlistService.removeFromWishlist(this.productItem.id ).subscribe(()=>{
        
        this.addedTowishList=false;



      })

    }



}
