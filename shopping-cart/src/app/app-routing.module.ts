import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {path:'',component:ShoppingCartComponent},
  {path:'test' , component:TestComponent },
  {path:'test1' , component:TestComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
