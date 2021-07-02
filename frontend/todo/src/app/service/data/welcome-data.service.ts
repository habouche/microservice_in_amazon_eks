import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class HelloWorldBean {
  constructor(public message: string) {}
}
@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService(): Observable<HelloWorldBean> {
    return this.http.get<HelloWorldBean>(
      'http://localhost:8080/basicauth'
    );
  }

  executeHelloWorldBeanServiceWithPathVariable(
    name
  ): Observable<HelloWorldBean> {
    // const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // const headers = new HttpHeaders({Authorization : basicAuthHeaderString});
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/basicauth`, // { headers}
    );
  }

  // createBasicAuthenticationHttpHeader(): string {
  //   const username = 'ferhat';
  //   const password = 'ferhat';
  //   const basicAuthHeaderString =
  //     'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
