import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Regisr } from './register.model';
import { LoginDTO } from './login.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  sendDetails(login: LoginDTO) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  // sendDetails(cart:Cart):Observable<any>{
  //  return this.http.post("http://localhost:8080/login",cart,{responseType:'text' as 'json'})
  //  return this.http.post("http://localhost:8080/login",cart)
  //}

  loginAuthentication(loginDTO: LoginDTO): Observable<any> {
    return this.http.post("http://localhost:8081/login/auth",loginDTO)
  }
  
}
