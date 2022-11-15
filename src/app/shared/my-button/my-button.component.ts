import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonUIComponent implements OnInit {

  // Default UI Componentler 1-selector sahiptir. Bir pageden çağırılır
  // @Input() ve @Output() bileşenlerine sahiptir. 

  // @Input()
  // @OutPut

  // butona dışarıdan parametre olarak göndereceğimiz değerleri Input olarak Angular tanımlamış
  @Input() cssStyle!:any;
  // dışarıdan component veri geçmemizi sağlar.
  @Input() padding!:number;
  @Input() margin!:number;

  // kendimize bir event tanımlamsı yaptık @Output olarak tanılarız
  // component ile ilgiili bir logic süreç varsa kullanırız.
  @Output() maxPaddingReached:EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {


    // 25 px den fala padding varsa 
    // ilk çalıştığında 25 px padding verilerse bu çalışacak
    if(this.padding > 25){
      this.padding = 25;
      // emit ile event fırlatma işlemini gerçekleştirdik.
      this.maxPaddingReached.emit('Padding Maksimum 25px olabilir');
      
    }
  }

}
