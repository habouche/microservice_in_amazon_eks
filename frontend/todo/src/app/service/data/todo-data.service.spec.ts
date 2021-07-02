import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  let service: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule],
    });
    service = TestBed.inject(TodoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
