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

  onClick(){
    alert('clicked')
  }

  onMouseOver(){
    alert('mouse üstünde')
  }

  onMaxPaddingReached(event:string){
    alert(event);
  }

  onSelect(selected:string){
    alert(`seçilen: ${selected}`);
  }

  onLoad(){
    alert('Veri yüklendi')
  }

  onClear(){
    // başka bir iş mantığı bunu dinleyip çalıştırılabilir. callback yapılabilir
    alert('Seçim Temizlendi');
  }
 

}
