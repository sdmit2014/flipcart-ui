import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../Service/login.api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // cart = new Regisr();

  loginform: FormGroup;
  constructor(private formbuilder: FormBuilder,
    private apiService: LoginService,
    private toastr: ToastrService,
    private router: Router) {
    this.loginform = this.formbuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  loginForm() {
    console.log(this.loginform.value);
    this.apiService.loginAuthentication(this.loginform.value).subscribe(response => {
      console.log("login response :", response);
      if (response.message === "Login Successfull") {
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
