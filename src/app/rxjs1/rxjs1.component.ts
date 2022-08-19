import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs1',
  templateUrl: './rxjs1.component.html',
  styleUrls: ['./rxjs1.component.css']
})
export class RxjsComponent1 implements OnInit {

  agents: Observable<string>;

  constructor() { }

  ngOnInit(): void {

    this.agents = new Observable(
      function (observer) {
        try {
          observer.next("Gujrat");
          observer.next("Rajastan");
          observer.next("Bangalore");
        }
        catch (e) {
          observer.error(e);
        }
      }
    );
  }

}
