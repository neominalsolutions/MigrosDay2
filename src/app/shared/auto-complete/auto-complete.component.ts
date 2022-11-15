import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  @Input() dataSource!:String[];
  @Input() selected!:string;
  @Input() disabled!:boolean;

  @Output() onSelect:EventEmitter<string> = new EventEmitter<string>();
  @Output() onClear:EventEmitter<void> = new EventEmitter<void>();
  @Output() onLoad:EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    if(this.dataSource.length > 0){
      this.onLoad.emit();
    }
  }

  onChange(event:any){
    console.log('event', event);
    this.selected = event.target.value;

    if(this.selected == ''){
      this.onClear.emit();
    }
    else {
      this.onSelect.emit(this.selected);
    }
    
  }

  clear(){
    this.selected = '';
    this.onClear.emit();
  }

}
