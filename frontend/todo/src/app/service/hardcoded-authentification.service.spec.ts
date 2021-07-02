import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';

import { HardcodedAuthentificationService } from './hardcoded-authentification.service';

describe('HardcodedAuthentificationService', () => {
  let service: HardcodedAuthentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule],
    });
    service = TestBed.inject(HardcodedAuthentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
