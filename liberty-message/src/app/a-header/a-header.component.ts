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
  status = 'nologged';
  messageHeader = 'Liberty Message';

  constructor(private dataServices: DataServices) {}

  ngOnInit() {
    this.numberEvent = this.dataServices.dataReceived$.
    subscribe(
      () => {
        this.number = this.dataServices.number;
        this.status = this.dataServices.status;
        this.messageHeader = this.dataServices.response;
      }, //pour chaque next 

      () => {console.log("erreur de subscribe");}, //en cas d'erreur
      () => {console.log("changement number");} //en cas de complet
    );
  }

}