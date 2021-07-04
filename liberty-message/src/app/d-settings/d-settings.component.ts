import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  modifyPasswordStatus = 'border-dark';

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

  onSubmit(form: NgForm) {
    let submitForm = form.value;
    // console.log(submitForm);
    if(submitForm['newpassword'] && submitForm['passwordVerify']){
      if(submitForm['newpassword'] === submitForm['passwordVerify']){
        this.modifyPasswordStatus = 'border-dark';
        this.dataServices.sendRequestTest(submitForm);
      }
      else{
        this.modifyPasswordStatus = 'border-danger';
      }
    }
    else{
      this.dataServices.sendRequestTest(submitForm);
    }
  }

}
