import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.css']
})
export class AuthContentComponent implements OnInit {
  data: string[] = [];

  constructor(private httpService: HttpService) {}

  // ngOnInit(): void {
  //   this.httpService.request('GET', '/messages').subscribe(
  //     (response) => {
  //       this.data = response;
  //     },
  //     (error) => {
  //       if (error.status === 401) {
  //         this.httpService.setAuthToken(null);
  //       } else {
  //         this.data = [error.message];
  //       }
  //     }
  //   );
  // }
  ngOnInit(): void {
    this.httpService.request('GET', '/messages').subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (error) => {
        if (error.status === 401) {
          this.httpService.setAuthToken(null);
        } else {
          this.data = [error.message];
        }
      }
    });
  }
}
