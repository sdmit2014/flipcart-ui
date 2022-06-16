import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterService } from '../Service/register.api';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  data:Array<any>

  constructor(private regService:RegisterService, private route:Router, private dialog:MatDialog) {

    this.data = new Array<any>()
   }

  getApiData(){
    this.regService.getData().subscribe((data)=>{
     this.data = data ;
     console.log(data);

    })
  }

  getBack(){
    this.route.navigate(['']);
  }

  addApiData(){
    this.route.navigate(['/register']);
  }
  
  ngOnInit(): void {

  }
  
}
