import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  message: string;

  constructor(private service: NotificationService) { }

  ngOnInit(): void {
    this.service.bsubject.subscribe(response => {
      console.log("response:", response)
      this.message = response;
    })
  }

}
