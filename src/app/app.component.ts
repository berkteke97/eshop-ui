import { Component } from '@angular/core';
import { AuthService } from './auth_service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNotification = false;
  notificationMessage = '';

  constructor(private authService: AuthService) {
    this.authService.currentUser.subscribe(user => {
      if (user) {
        this.showNotification = true;
        this.notificationMessage = 'Oturum başarıyla açıldı!';
        setTimeout(() => {
          this.showNotification = false;
        }, 5000); // 5 saniye sonra bildirimi gizle
      }
    });
  }
}