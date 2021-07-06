import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataServices } from '../services/data-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-i-dialogue',
  templateUrl: './i-dialogue.component.html',
  styleUrls: ['./i-dialogue.component.scss']
})
export class IDialogueComponent implements OnInit {

  dialogueEvent: Subscription;
  intervalMessages: any;
  messagelist = [];
  currentRoomname: any;
  currentTarget: any;

  constructor(private dataServices: DataServices) {
    this.currentRoomname = this.dataServices.roomname;
    this.currentTarget = this.dataServices.target;
    this.messagelist = this.dataServices.messagelist;
    this.launchViewMessages();
  }

  targetname = "destinataire";

  ngOnInit() {
    console.log("init messages");
    // this.messagelist = this.dataServices.messagelist;
    // this.targetname = this.dataServices.target;

    // lancer requête lecture room toutes les 5 sec
    this.intervalMessages = setInterval(
      () => {
        this.launchViewMessages();
      }
      , 5000);

    // mettre à jour la liste room à chaque retour de requête
    this.dialogueEvent = this.dataServices.dataReceived$.
    subscribe(
      () => {
        this.currentRoomname = this.dataServices.roomname;
        this.currentTarget = this.dataServices.target;
        this.messagelist = this.dataServices.messagelist;
      }, //pour chaque next 

      () => {console.log("erreur de subscribe");}, //en cas d'erreur
      () => {console.log("changement number");} //en cas de complet
    );

  }

  ngOnDestroy() {
    console.log("destroy messages");
    clearInterval(this.intervalMessages);
    this.dataServices.roomname = "";
    this.dataServices.target = "";
    this.dataServices.messagelist = [];
  }

  onSubmit(form: NgForm) {
    let submitForm = form.value;
    
      this.dataServices.sendRequestTest(submitForm);
    }


  launchViewMessages() {
    // this.dataServices.target = targetname;
    // this.dataServices.roomname = roomname;
    let action = 'viewMessages';
    let objectViewMessages = {};

    objectViewMessages['action'] = action;
    objectViewMessages['roomname'] = this.currentRoomname;

    this.dataServices.sendRequestTest(objectViewMessages);
  }

}
