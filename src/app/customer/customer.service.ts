import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.API_BASE_URL;

  createCustomer(customer: Customer){ 
    return this.http.post("http://localhost:8092"+"/account/addCustomer", customer);
  }

  login(username: String, password: String){

    const loginData = {
      username: username,
      password: password
    };
    return this.http.post("http://localhost:8092"+"/login", loginData);
  }
}
