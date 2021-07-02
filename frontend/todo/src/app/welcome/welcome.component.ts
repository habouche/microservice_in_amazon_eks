import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message';
  welcomeMessageFromService: string;
  name = '';
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params.name;
  }

  getWelcomeMessage(): void {
    this.service.executeHelloWorldBeanService().subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter(): void {
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );
  }

  handleErrorResponse(error: any): void {
    this.welcomeMessageFromService = error.error.message;
  }

  handleSuccessfulResponse(response: any): void {
    this.welcomeMessageFromService = response.message;
  }
}
