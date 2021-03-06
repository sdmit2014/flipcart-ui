import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  //Insert Operation
  saveDetails(register: Register): Observable<any> {

    return this.http.post("http://localhost:8081/register/save", register, { responseType: 'text' as 'json' })

  }

  //Login Operation
  sendDetails(cart: Register): Observable<any> {
    //  return this.http.post("http://localhost:8080/login",cart,{responseType:'text' as 'json'})
    return this.http.post("http://localhost:8081/login", cart)
  }

  //Retrieve Operation
  getData(): Observable<any> {
    //Approach:1
    return this.http.get<any>('http://localhost:8080/get')

    //Approach:2 
    // const url="http://localhost:8080/get";
    // return this.http.get<any>(url)

  }


}
