import { Component, inject } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  todoService = inject(TodoService)
  todos = this.todoService.todos

  // constructor() {
  //   this.todoService.fetchTodos()
  // }

  ngOnInit() {
    this.todoService.fetchTodos2()
  }
}
