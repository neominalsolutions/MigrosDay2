import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel, Validators } from '@angular/forms';
import { User } from './user';

@Component({
  templateUrl: './user-create-page.component.html',
  styleUrls: ['./user-create-page.component.scss']
})
export class UserCreatePageComponent implements OnInit {

  selected:string = 'template';

  ngOnInit(): void {

  }

 

}
