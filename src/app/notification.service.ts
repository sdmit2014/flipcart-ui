import { Injectable } from '@angular/core';
import  {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  //------- Using Subject -------
  // private subject = new Subject<string>();

  //------- Using BehaviorSubject -------
  bsubject = new BehaviorSubject<string>("");

  constructor() { }

  //This method is for sending data
  sendNotification(data: string){
    this.bsubject.next(data);
  }
  
  //This method is for recieving data
  recieveNotification():Observable<string>{
    return this.bsubject.asObservable();
  }

}
