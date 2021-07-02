import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params.id;
    this.todo = new Todo(this.id, '', true, new Date());
    // console.log(this.todo.id);
    // console.log(this.todo.description);
    // console.log(this.todo.done);
    // console.log(this.todo.targetDate);
    if (this.id === -1) {}
    else{
      console.log(this.id);
      console.log('im about to retrive');
      this.todoService
        .retrieveTodo('Ferhat', this.id)
        .subscribe((data) => (this.todo = data));
    }
  }

  saveTodo(): void {
    if (this.id !== -1) {
      console.log(this.todo.id);
      console.log('im in put ' + this.todo);
      this.todoService
        .updateTodo('Ferhat', this.id, this.todo)
        .subscribe((data) => {
          this.router.navigate(['todos']);
        });
    } else {
      console.log(this.todo.description);
      this.todoService.createTodo('Ferhat', this.todo).subscribe((data) => {
        console.log(data);
        this.router.navigate(['todos']);
      });
    }
  }
}
