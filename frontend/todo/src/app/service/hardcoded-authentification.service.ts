import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthentificationService {
  constructor() {}

  authenticate(username: string, password: string): boolean {
    //  console.log('before' + this.isUserLoggedIn());
    if (username === 'ferhat' && password === 'ferhat') {
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('after' + this.isUserLoggedIn());
      return true;
    }
    return false;
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
