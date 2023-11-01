import { Component } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  componentToShow: string = "welcome";

  constructor(private httpService: HttpService) { }

  showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }

  onLogin(input: any): void {
    this.httpService.request('POST', '/login', {
      login: input.login,
      password: input.password
    }).subscribe({
      next: (response) => {
        this.httpService.setAuthToken(response.token);
        this.componentToShow = "messages";
      },
      error: (error) => {
        this.httpService.setAuthToken(null);
        this.componentToShow = "welcome";
        console.error('Error logging in:', error);
      }
    });
  }

  onRegister(input: any): void {
    this.httpService.request('POST', '/register', {
      firstName: input.firstName,
      lastName: input.lastName,
      login: input.login,
      password: input.password
    }).subscribe({
      next: (response) => {
        this.httpService.setAuthToken(response.token);
        this.componentToShow = "messages";
      },
      error: (error) => {
        this.httpService.setAuthToken(null);
        this.componentToShow = "welcome";
        console.error('Error registering:', error);
      }
    });
  }

  isLoggedIn(): boolean {
    return this.httpService.getAuthToken() !== null;
  }

  onLogout(): void {
    this.httpService.setAuthToken(null);
    this.componentToShow = "welcome";
  }
}
