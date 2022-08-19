import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../Service/register.api';
import { FormBuilderService } from '../Service/register.builder';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  action: string;
  formRecord: any;
  isDisabled: boolean = false;
  approveStatus: boolean = false;
  formDisabled: boolean = false;
  registerform: FormGroup;
  dataArray:any[]=[];

  genderList: any = [
    { "value": "M", "name": "Male" },
    { "value": "F", "name": "Female" }
  ]

  constructor(
    private service: RegisterService,
    private builder: FormBuilderService,
    private toastr: ToastrService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.registerform = this.builder.buildFormGroupRegister(this.builder.emptyRegister);
  }

  registerForm() {
    console.log(this.registerform.value);
    this.service.registerUser(this.registerform.value).subscribe(response => {
      console.log("register response :", response);
      this.toastr.success("Register Successfully");
      this.router.navigate(['home']);
    })
  }

  resetForm() {
    this.registerform.reset();
  }
}
