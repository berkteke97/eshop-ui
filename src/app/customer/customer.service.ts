import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  
  createCustomer(customer: Customer){
    baseUrl : environment.API_BASE_URL;
    return this.http.post(url, customer);
  }
}
