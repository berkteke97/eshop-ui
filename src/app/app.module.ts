import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- Ekleyin

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product/product.service';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth_service/auth.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    RegisterComponent,
    CustomerProfileComponent,
    AuthComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [ProductService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
