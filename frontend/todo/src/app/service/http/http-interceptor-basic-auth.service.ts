import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthentificationService } from '../basic-authentification.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
  constructor(private basicAuthentificationService: BasicAuthentificationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const username = 'ferhat';
    // const password = 'ferhat';
    // const basicAuthHeaderString =
    //   'Basic ' + window.btoa(username + ':' + password);
    const JWTAuthHeaderString = this.basicAuthentificationService.getAuthenticatedToken();
    const username = this.basicAuthentificationService.getAuthenticatedUser();
    if ( JWTAuthHeaderString && username){
    request = request.clone({
      setHeaders: {
        Authorization: JWTAuthHeaderString,
      },
    });
  }
    return next.handle(request);
  }
}
