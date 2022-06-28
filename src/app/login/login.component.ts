import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../Service/register.api';
import { Register } from '../Service/register.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cart = new Register();

  loginform: FormGroup;
  constructor(private formbuilder: FormBuilder, private service: RegisterService, private toastr: ToastrService, private router: Router) {
    this.loginform = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  loginForm() {
    console.log(this.loginform.value);
    this.service.sendDetails(this.loginform.value).subscribe(response => {
      console.log("login response :",response);
      if (response.response === "SUCCESS") {
        this.toastr.success(response.message);
        this.router.navigate(['/home']);
      }
      else {
        this.toastr.error(response.message);
      }
    })
  }

  resetForm() {
    this.loginform.reset();

  }

}
