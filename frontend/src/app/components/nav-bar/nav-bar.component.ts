import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router: Router, private authService: AuthService) {}

  navigateToLogin(): void {
    this.router.navigateByUrl('/login');
  }

  logout(): void {
    this.authService.setAuthToken(null);
    this.router.navigateByUrl('/home');
  }

  get isLoggedIn(): boolean {
    return this.authService.getAuthToken() !== null;
  }
}
