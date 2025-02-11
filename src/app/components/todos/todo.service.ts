import { inject, Injectable, signal } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = signal<Array<Todo>>([])
  http = inject(HttpClient)

  readonly TODO_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos'

  fetchTodos() {
    fetch(this.TODO_ENDPOINT)
      .then(async data => {
        const todos = await data.json()
        this.todos.set(todos)
      })
      .catch(error => console.error(error))
      .finally(() => console.log("TODO API Ends..."))
  }


  fetchTodos2() {
    return this.http.get<Todo[]>(this.TODO_ENDPOINT)
      .pipe(catchError(error => {
        console.error(error)
        throw error
      }))
      .subscribe(todos => {
        this.todos.set(todos)
      })
  }

}
