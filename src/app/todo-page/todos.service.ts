import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo-page.component';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable() // uygulama içerisinde root olarak tanımlanmadığından provider eklenmelidr.
export class TodosService {

  constructor(private http:HttpClient) { }


  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
