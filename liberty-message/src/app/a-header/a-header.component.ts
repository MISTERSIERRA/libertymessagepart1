import { Component, Input, OnInit } from '@angular/core';
import { DataServices } from '../services/data-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-a-header',
  templateUrl: './a-header.component.html',
  styleUrls: ['./a-header.component.scss']
})
export class AHeaderComponent implements OnInit {

  numberEvent: Subscription;
  number = '0';

  constructor(private dataServices: DataServices) {}

  ngOnInit() {
    this.numberEvent = this.dataServices.dataReceived$.
    subscribe(
      () => {
        this.number = this.dataServices.number;
      }, //pour chaque next 

      () => {console.log("erreur de subscribe");}, //en cas d'erreur
      () => {console.log("changement number");} //en cas de complet
    );
  }

}