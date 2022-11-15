import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreatePageComponent } from './user-create-page.component/user-create-page.component';

const routes: Routes = [
  {
    path:'user-create-page',
    component:UserCreatePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
