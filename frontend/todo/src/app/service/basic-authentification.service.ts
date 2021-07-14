import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export class AuthenticationBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class BasicAuthentificationService {
  constructor(private http: HttpClient) {}

  executeAuthenticationService(
    username,
    password
  ): Observable<AuthenticationBean> {
    const basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);
    const headers = new HttpHeaders({ Authorization: basicAuthHeaderString });
    return this.http
      .get<AuthenticationBean>(`${API_URL}/basicauth`, { headers })
      .pipe(
        map((data) => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
          return data;
        })
      );
  }

  executeJWTAuthenticationService(username, password): Observable<any> {
    // const basicAuthHeaderString =
    //   'Basic ' + window.btoa(username + ':' + password);
    // const headers = new HttpHeaders({ Authorization: basicAuthHeaderString });
    return this.http
      .post<any>(`${API_URL}/authenticate`, { username, password })
      .pipe(
        map((data) => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('token', `Bearer ${data.token}`);
          return data;
        })
      );
  }

  getAuthenticatedUser(): string {
    return sessionStorage.getItem('authenticatedUser');
  }
  getAuthenticatedToken(): string {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token');
    }
  }

  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout(): void {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }
}
