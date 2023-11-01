import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  componentToShow: string = "welcome";

  constructor(private authService: AuthService) { }

  showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }

  onLogin(input: any): void {
    this.authService.request('POST', '/login', {
      login: input.login,
      password: input.password
    }).subscribe({
      next: (response) => {
        this.authService.setAuthToken(response.token);
        this.componentToShow = "messages";
      },
      error: (error) => {
        this.authService.setAuthToken(null);
        this.componentToShow = "welcome";
        console.error('Error logging in:', error);
      }
    });
  }

  onRegister(input: any): void {
    this.authService.request('POST', '/register', {
      firstName: input.firstName,
      lastName: input.lastName,
      login: input.login,
      password: input.password
    }).subscribe({
      next: (response) => {
        this.authService.setAuthToken(response.token);
        this.componentToShow = "messages";
      },
      error: (error) => {
        this.authService.setAuthToken(null);
        this.componentToShow = "welcome";
        console.error('Error registering:', error);
      }
    });
  }

  isLoggedIn(): boolean {
    return this.authService.getAuthToken() !== null;
  }

  onLogout(): void {
    this.authService.setAuthToken(null);
    this.componentToShow = "welcome";
  }
}
