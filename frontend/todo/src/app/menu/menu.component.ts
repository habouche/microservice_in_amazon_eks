import { Component, OnInit } from '@angular/core';
import { BasicAuthentificationService } from '../service/basic-authentification.service';
// import { HardcodedAuthentificationService } from '../service/hardcoded-authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // isUserLoggedIn = false;
  constructor(public basicAuthentificationService: BasicAuthentificationService) { }

  ngOnInit(): void {
    // this.isUserLoggedIn = this.hardcodedAuthentificationService.isUserLoggedIn();
  }

}
