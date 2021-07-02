import { Component, OnInit } from '@angular/core';
import { BasicAuthentificationService } from '../service/basic-authentification.service';
// import { HardcodedAuthentificationService } from '../service/hardcoded-authentification.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(
    private basicAuthentificationService: BasicAuthentificationService
  ) {}

  ngOnInit(): void {
    this.basicAuthentificationService.logout();
  }
}
