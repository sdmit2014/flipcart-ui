import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  //-------------- While Parent --> child data transfer---------------------------
  @Input()
  cname:string;

  //-------------- While child --> Parent data transfer----------------------------
  @Output()
  notify:EventEmitter<string> = new EventEmitter<string>();

  sendData(sendData:string){
    this.notify.emit(sendData);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
