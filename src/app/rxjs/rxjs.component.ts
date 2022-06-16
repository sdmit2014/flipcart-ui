import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

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
