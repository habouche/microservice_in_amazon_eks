import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, TODO_JPA_API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  retrieveAllTodos(username: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      `${TODO_JPA_API_URL}/users/${username}/todos`
    );
  }

  deleteTodo(username: string, id): Observable<{}> {
    return this.http.delete(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`
    );
  }

  retrieveTodo(username: string, id): Observable<Todo> {
    return this.http.get<Todo>(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`
    );
  }

  updateTodo(username: string, id, todo): Observable<{}> {
    return this.http.put(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`,
      todo
    );
  }

  createTodo(username: string, todo): Observable<{}> {
    return this.http.post(
      `${TODO_JPA_API_URL}/users/${username}/todos`,
      todo
    );
  }
}
