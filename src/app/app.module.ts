import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCreatePageComponent } from './user-create-page.component/user-create-page.component';
import { TempateFormSampleComponent } from './tempate-form-sample/tempate-form-sample.component';
import { ReactiveFormSampleComponent } from './reactive-form-sample/reactive-form-sample.component';

// Angularda Template Forms Yçntemi ile çalışmamızı sağlamak için TemplateFormsModule import ederiz.
//Angularda Ts taraflı ReactiveForms dediğimiz yöntem ile çalışmamızı sağlamak için ReactiveFormsModule Import ederiz
@NgModule({
  declarations: [
    AppComponent,
    UserCreatePageComponent,
    TempateFormSampleComponent,
    ReactiveFormSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
