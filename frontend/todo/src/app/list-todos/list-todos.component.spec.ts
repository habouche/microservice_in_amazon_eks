import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';

import { ListTodosComponent } from './list-todos.component';

describe('ListTodosComponent', () => {
  let component: ListTodosComponent;
  let fixture: ComponentFixture<ListTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTodosComponent],
      imports: [HttpClientModule, AppRoutingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
