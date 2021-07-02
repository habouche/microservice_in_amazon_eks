import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];

  // new Todo(1, 'Learn Java', false, new Date()),
  // new Todo(2, 'Learn Angular', false, new Date()),
  // new Todo(3, 'Learn AWS', false, new Date()),
  message: string;

  constructor(private service: TodoDataService, private router: Router) {}

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(): void {
    this.service.retrieveAllTodos('Ferhat').subscribe((response) => {
      this.todos = response;
    });
  }

  deleteTodo(id): void {
    this.service.deleteTodo('Ferhat', id).subscribe((response) => {
      this.message = `Delete of todo ${id} is susscesful`;
      this.refreshTodos();
    });
  }

  updateTodo(id): void {
    this.router.navigate(['todos', id]);
  }

  addTodo(): void {
    this.router.navigate(['todos', -1]);
  }
}
