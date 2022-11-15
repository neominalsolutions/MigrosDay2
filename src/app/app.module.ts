import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCreatePageComponent } from './user-create-page.component/user-create-page.component';
import { TempateFormSampleComponent } from './tempate-form-sample/tempate-form-sample.component';
import { ReactiveFormSampleComponent } from './reactive-form-sample/reactive-form-sample.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodosService } from './todo-page/todos.service';

// Angularda Template Forms Yçntemi ile çalışmamızı sağlamak için TemplateFormsModule import ederiz.
//Angularda Ts taraflı ReactiveForms dediğimiz yöntem ile çalışmamızı sağlamak için ReactiveFormsModule Import ederiz

// HttpClientModule angular tarafında componentlerin servis ile çalışmasını sağlayan bir module sistem. HttpRequest, HttpResponse, HttpHeaders tipi, Get, Post, Put, Delete Http Verbs, HttpStatusCode gibi tanımlar bulundurulmaktadır. 
@NgModule({
  declarations: [
    AppComponent,
    UserCreatePageComponent,
    TempateFormSampleComponent,
    ReactiveFormSampleComponent,
    TodoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule // FeatureModule
  ],
  providers: [TodosService], // providers kısmında servisleri eğer injectable service root olarak tanımlanmaış ise bu moduleden service erişmek için tanımlama yaparız.
  bootstrap: [AppComponent]
})
export class AppModule { }

// Bir uygulamada kullanılan component,directive,pipes gibi yapıları uygulamanın module sayfalarına paylaştıran yapılara Feature Module

// FeatureModule AppModule Import ederek feature module içerisindeki componentlere ve diğer bileşenlere erişim sağlıyoruz.