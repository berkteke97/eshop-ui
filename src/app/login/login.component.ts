// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  error: boolean = false;

  constructor(private router: Router) {}

  login(): void {
    // Kullanıcı doğrulaması yapılabilir. Bu örnekte sadece basit bir kontrol var.
    if (this.username === 'admin' && this.password === 'password') {
      // Kullanıcı doğrulandı, anasayfaya yönlendir.
      this.router.navigate(['/product-list']);
    } else {
      // Kullanıcı doğrulanamadı, hata mesajı göster.
      this.error = true;
    }
  }
}
