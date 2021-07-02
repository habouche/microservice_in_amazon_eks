import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HttpInterceptorBasicAuthService } from './http-interceptor-basic-auth.service';

describe('HttpInterceptorBasicAuthService', () => {
  let service: HttpInterceptorBasicAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule],
    });
    service = TestBed.inject(HttpInterceptorBasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
