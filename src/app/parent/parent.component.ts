import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  //-------------- While Parent --> child data transfer---------------------------

  name:string="";

  sendData(data: string){
    console.log("data:",data);
   this.name= data;
  }

  //-------------- While child --> Parent data transfer----------------------------

  childData:string;

  parentData(data: string){
    this.childData = data;
  }

 


  constructor() { }

  ngOnInit(): void {
  }

}
