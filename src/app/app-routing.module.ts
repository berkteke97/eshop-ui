import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { AuthComponent } from './auth/auth.component';
const routes: Routes = [
  {
  path : "product-list",
  component :  ProductListComponent
  },
  {
    path : "register",
    component :  RegisterComponent
  },
  {
    path : "customer-profile",
    component :  CustomerProfileComponent
  },
  {
    path : "auth",
    component :  AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
