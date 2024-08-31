import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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
      return this.http.get("http://localhost:8092"+ "/product");
  }


  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8092/product/${id}`);
  }
  
}
