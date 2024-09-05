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
  imageSrc: string | undefined;  // BURADA TANIMLAYIN

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
            if (this.product.imageUrl) {
              this.imageSrc = this.convertImageToBase64(this.product.imageUrl);
            }
          },
          error => {
            console.error('Ürün bilgileri alınamadı:', error);
          }
        );
      }
    });
  }

  convertImageToBase64(image: any): string {
    return 'data:image/jpeg;base64,' + image;  // Image type jpg/png vb. olabilir.
  }

  buyProduct(): void {
    alert('Bu ürünü satın almak için ilgili adımları izleyin.');
  }
}
