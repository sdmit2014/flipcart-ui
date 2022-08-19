import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fc-date',
  templateUrl: './fc-date.component.html',
  styleUrls: ['./fc-date.component.css']
})
export class FcDateComponent implements OnInit {

  @Input() placeholder="";
  @Input() parentForm = FormGroup;
  @Input() formControl:string;
  @Input() minDate: any;
  @Input() bsValue: any;
  @Input() maxDate: any;
  @Input() inputRequired: boolean;
  @Input() isDisabled: boolean;
  @Output() onValueChange: EventEmitter<any>;

  constructor() {
    this.onValueChange = new EventEmitter()
   }

  ngOnInit(): void {
    console.log("fc-date-component");
    console.log("isDisabled >>", this.isDisabled);
  }

  valueChange(event: any){
    this.onValueChange.emit(event);
  }

}
