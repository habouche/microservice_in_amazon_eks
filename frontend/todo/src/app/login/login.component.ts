import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthentificationService } from '../service/basic-authentification.service';
import { HardcodedAuthentificationService } from '../service/hardcoded-authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'ferhat';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(
    private route: Router,
    private hardcodedAuthentificationService: HardcodedAuthentificationService,
    private basicAuthentificationService: BasicAuthentificationService
  ) {}

  ngOnInit(): void {}

  // handleLogin(): void {
  //   // console.log(this.username);
  //   if (
  //     this.hardcodedAuthentificationService.authenticate(
  //       this.username,
  //       this.password
  //     )
  //   ) {
  //     // redirct  to the welcome page
  //     this.route.navigate(['welcome', this.username]);
  //     this.invalidLogin = false;
  //   } else {
  //     this.invalidLogin = true;
  //     console.log('true');
  //   }
  // }

  handleJWTAuthLogin(): void {
      this.basicAuthentificationService
      .executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        (data) => {
          console.log(data);
          this.route.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        (error) => {
          this.invalidLogin = true;
        }
      );
  }
}
