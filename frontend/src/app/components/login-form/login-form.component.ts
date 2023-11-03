import { EventEmitter, Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  })
export class LoginFormComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  constructor(private authService: AuthService, private router: Router) { }

	active: string = "login";
  firstName: string = "";
  lastName: string = "";
  login: string = "";
  password: string = "";

	onLoginTab(): void {
		this.active = "login";
	}

	onRegisterTab(): void {
		this.active = "register";
	}

  onSubmitLogin(): void {
    const input = {
      login: this.login,
      password: this.password
    };
    this.authService.request('POST', '/login', input).subscribe({
      next: (response) => {
        this.authService.setAuthToken(response.token);
        this.router.navigateByUrl('/messages');
      },
      error: (error) => {
        this.authService.setAuthToken(null);
        console.error('Error logging in:', error);
      }
    });
  }

  onSubmitRegister(): void {
    // Check if all fields are filled
    if (this.firstName && this.lastName && this.login && this.password) {
      const input = {
        firstName: this.firstName,
        lastName: this.lastName,
        login: this.login,
        password: this.password
      };
      this.authService.request('POST', '/register', input).subscribe({
        next: (response) => {
          this.authService.setAuthToken(response.token);
          this.router.navigateByUrl('/messages');
        },
        error: (error) => {
          this.authService.setAuthToken(null);
          console.error('Error registering:', error);
        }
      });
    } else {
      // Display an error message if the form is invalid
      alert("All fields are required!");
    }
  }


}
