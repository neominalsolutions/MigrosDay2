import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButtonUIComponent } from './my-button/my-button.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';

// CommonModule angulardaki builtin directiveleri *ngFor *ngIf gibi yapıları içerisinde barındıran library bu sebep ile her module bu library kullanmalıdır.

// Bir UI Module içerisinmdeki componentler başka bir module tarafından eğer çağırılıyorsa bu durumda export edilmeldir.

@NgModule({
  declarations: [
    MyButtonUIComponent,
    AutoCompleteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AutoCompleteComponent,
    MyButtonUIComponent // Bu module içerisinde hangi componentleri dışarı export ediceksem söylüyorum,
   
  ]
})
export class SharedModule { }
