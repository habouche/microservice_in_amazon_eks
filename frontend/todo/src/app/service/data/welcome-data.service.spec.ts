import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { WelcomeDataService } from './welcome-data.service';

describe('WelcomeDataService', () => {
  let service: WelcomeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule],
    });
    service = TestBed.inject(WelcomeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
