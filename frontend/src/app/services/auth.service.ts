import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token");
  }

  setAuthToken(token: string | null): void {
    if (token !== null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    const authToken = this.getAuthToken();
    if (authToken) {
      headers = headers.append('Authorization', `Bearer ${authToken}`);
    }
    return headers;
  }

  request(method: string, url: string, data?: any): Observable<any> {
    const fullUrl = `${this.baseUrl}${url}`;
    return this.http.request(method, fullUrl, {
      body: data,
      headers: this.getHeaders()
    });
  }
}
