import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
 
  subject =new Subject ();

  constructor() { }

  sendMsg(product){
  console.log(product)
  this.subject.next(product)   ///Triggering an event 

  }

  getMsg(){

    ///any one that call the getMsg and subscribe to what ever that is trigerred
   return this.subject.asObservable()   


  }


}
