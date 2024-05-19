import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth_service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  template: `
    <div>
      <h2>Giriş Yap</h2>
      <form [formGroup]="loginForm" (ngSubmit)="login()">
        <div>
          <label>Kullanıcı Adı:</label>
          <input
            type="text"
            formControlName="username"
            required
          />
          <!-- Kullanıcı adı hatalarını göster -->
          <div *ngIf="loginForm.get('username')?.invalid && loginForm.get('username')?.touched">
            Kullanıcı adı zorunludur.
          </div>
        </div>
        <div>
          <label>Şifre:</label>
          <input
            type="password"
            formControlName="password"
            required
          />
          <!-- Şifre hatalarını göster -->
          <div *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">
            Şifre zorunludur.
          </div>
        </div>
        <button type="submit" [disabled]="!loginForm.valid">Giriş Yap</button>
      </form>
    </div>
  `,
  styles: [`
    /* Stil ekleyin */
  `],
})
export class AuthComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    // Reactive formu oluşturun
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(
        response => {
          // Başarılı giriş durumunda yönlendirme
          this.router.navigate(['/product-list']);
        },
        error => {
          console.error('Giriş başarısız:', error);
          // Kullanıcıya hata mesajı gösterin
          alert('Giriş başarısız! Lütfen kullanıcı adı veya şifrenizi kontrol edin.');
        }
      );
    }
  }
}
