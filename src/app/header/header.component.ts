import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: NotificationService) { }

  ngOnInit(): void {
  }

  sendMessage(message: string) {
    this.service.bsubject.next(message);
  } 

  // sendMessage(message: string){
  //   this.notifyService.sendNotification(message);
  // }

}
