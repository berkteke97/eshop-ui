import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.productService.getProductById(id).subscribe(
          data => {
            this.product = data;
          },
          error => {
            console.error('Ürün bilgileri alınamadı:', error);
          }
        );
      }
    });
  }

  buyProduct(): void {
    // Satın alma işlemi için gerekli işlevler burada tanımlanabilir
    alert('Bu ürünü satın almak için ilgili adımları izleyin.');
  }
}
