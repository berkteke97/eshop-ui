import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.API_BASE_URL;
  createProduct(product: Product){ 
    return this.http.post(this.baseUrl, product);
  }
  getProductList(){
    return this.http.get(this.baseUrl);
  }

}
