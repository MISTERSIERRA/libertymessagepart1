import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataServices } from '../services/data-services';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-b-login',
  templateUrl: './b-login.component.html',
  styleUrls: ['./b-login.component.scss']
})
export class BLoginComponent implements OnInit {

  loginEvent: Subscription;

  loginStatus = 'nologged';

  verifyPasswordStatus = 'border-dark';

  constructor(private dataServices: DataServices) {}

  ngOnInit() {
    this.loginEvent = this.dataServices.dataReceived$.
    subscribe(
      () => {
        this.loginStatus = this.dataServices.status;
      }, //pour chaque next 

      () => {console.log("erreur de subscribe");}, //en cas d'erreur
      () => {console.log("changement number");} //en cas de complet
    );
  }

  onSubmit(form: NgForm) {
    let submitForm = form.value;
    if(submitForm['password'] && submitForm['passwordVerify']){
      if(submitForm['password'] === submitForm['passwordVerify']){
        this.verifyPasswordStatus = 'border-dark';
        this.dataServices.sendRequestTest(submitForm);
      }
      else{
        this.verifyPasswordStatus = 'border-danger';
      }
    }
    else{
      this.dataServices.sendRequestTest(submitForm);
    }
  }

  launchLogOutUser() {
    let action = 'logOutUser';
    let objectLogOut = {};

    objectLogOut['action'] = action;

    this.dataServices.sendRequestTest(objectLogOut);
  }

}
