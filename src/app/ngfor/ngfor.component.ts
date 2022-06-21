import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  players: any;

  playersname ="";

  months=10;

  uppercaseEx = "list of players"

  lowercaseEx = "SEARCH"

  dateEx = Date.now();

  currencyEx = 1500;

  constructor() { }
// 
  ngOnInit(): void {

    this.players = [
      {
        "ranking": 1,
        "name": "Roanldo",
        "team": "Man United",
        "nationality": "portugal"
      },
      {
        "ranking": 2,
        "name": "Messi",
        "team": "PSG",
        "nationality": "Argentina"
      },
      {
        "ranking": 3,
        "name": "Neymer",
        "team": "PSG",
        "nationality": "Brazil"
      },
      {
        "ranking": 4,
        "name": "Levendoski",
        "team": "Bayern Munic",
        "nationality": "France"
      }
    ]
  }

}
