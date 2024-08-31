import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { AuthComponent } from './auth/auth.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
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
  },
  
  { path: 'product-detail/:id', component: ProductDetailComponent }, // id parametresi burada

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
