import { Component, Input, OnInit } from '@angular/core';
import { DataServices } from '../services/data-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-d-settings',
  templateUrl: './d-settings.component.html',
  styleUrls: ['./d-settings.component.scss']
})
export class DSettingsComponent implements OnInit {

  usernameEvent: Subscription;
  username = "";

  constructor(private dataServices: DataServices) {}

  ngOnInit() {
    this.usernameEvent = this.dataServices.dataReceived$.
    subscribe(
      () => {
        this.username = this.dataServices.name;
      }, //pour chaque next 

      () => {console.log("erreur de subscribe");}, //en cas d'erreur
      () => {console.log("changement number");} //en cas de complet
    );
  }

}
