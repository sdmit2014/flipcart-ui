import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Regisr } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  //Insert Operation
  registerUser(register: Regisr): Observable<any> {
    return this.http.post("http://localhost:8081/register/create", register, { responseType: 'text' as 'json' })
  }

  //Retrieve Operation
  getData(): Observable<any> {
    return this.http.get<any>('http://localhost:8081/register/getAll')
  }


}
