import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Cart } from './register.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  sendDetails(cart: Cart) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

 // sendDetails(cart:Cart):Observable<any>{
 //  return this.http.post("http://localhost:8080/login",cart,{responseType:'text' as 'json'})
   //  return this.http.post("http://localhost:8080/login",cart)
  //}
}
