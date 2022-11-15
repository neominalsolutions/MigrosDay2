import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { UserCreatePageComponent } from './user-create-page.component/user-create-page.component';

const routes: Routes = [
  {
    path:'user-create-page',
    component:UserCreatePageComponent
  },
  {
    path:'todo-page',
    component:TodoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
