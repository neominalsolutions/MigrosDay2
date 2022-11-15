import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosService } from './todos.service';

export interface Todo {
  id:number;
  title:string;
  complete:boolean;
}


@Component({
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
  //providers:[TodosService] // Transient yani component instance ile birlikte service ayağa kalkar.
})
export class TodoPageComponent implements OnInit {

  // Kural Component direkt olarak servis bağımlı hale getirmemek için Servicleri ayrı bir bileşen olarak yazıp componentlere bağlarız.

  todos!:Todo[];
  todos$!:Observable<Todo[]>;

  constructor(private http:HttpClient, private todoHttp:TodosService) { }

  ngOnInit(): void {

    

    // promise yapısı Ecmascript 6 ile hayatımıza girdi
    // Vanilla JS API çözümü
    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(response => response.json())
    // .then(json => console.log('data',json)) // resolve
    // .catch(err => {
    //   // reject
    //   console.log('err', err);
    // })

    // Rxjs tarafında bu kullanıma son verildi. Bu sebeple http servisleri observable döndürüyoruz
    // this.http.get('https://jsonplaceholder.typicode.com/todos').toPromise().then(res => {
    //   console.log('response',res);
    // }).catch(err => {
    //   console.log('err',err);
    // }).finally(() => {
    //   console.log('her türlü yapılacak işlemler burada çalışır')
    // });

    // depraceted olacağı söyleniyor
    // this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(data=>{
    // },err => {
    // });

  }

  loadAndSubscribe(){
     // Http Header kullanımı yaptık
     let myHeader = new HttpHeaders();
     myHeader = myHeader.append('lang','tr');
 
     // 1. yöntem
 
      this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos',{headers:myHeader}).subscribe(
       {
         next:(data:Todo[]) => { 
           console.log('data', data)   
           this.todos = [... data]; // spread 
           // filtrelenebilir.
         }, // success  
         error:(err) => { console.log('err', err) }, // catch
         complete:() => { }// finaly}
     });
  }

      // 2. yöntem
    // observable bir nesne
  loadAsync(){
    // this.todos$ = this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
    this.todos$ = this.todoHttp.getTodos();
  }

}
