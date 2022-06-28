import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../Service/register.api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform : FormGroup;
  constructor(private formbuilder:FormBuilder, private service:RegisterService, private toastr:ToastrService, private router:Router ) {
    this.registerform=this.formbuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required],
      mobileNumber:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  registerForm(){
    console.log(this.registerform.value);
    this.service.saveDetails(this.registerform.value).subscribe(response=>{
    console.log("register response :",response);
    this.toastr.success(response);
    this.router.navigate(['']);
    })
  }

  resetForm(){
    this.registerform.reset();
  }
}
