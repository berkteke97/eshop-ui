import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.API_BASE_URL;

  createCustomer(customer: Customer){ 
    return this.http.post(this.baseUrl, customer);
  }
}
