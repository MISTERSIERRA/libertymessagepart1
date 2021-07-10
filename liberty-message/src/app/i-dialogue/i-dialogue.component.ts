import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataServices } from '../services/data-services';
import { Subscription } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-i-dialogue',
  templateUrl: './i-dialogue.component.html',
  styleUrls: ['./i-dialogue.component.scss']
})
export class IDialogueComponent implements OnInit {

  dialogueEvent: Subscription;
  intervalMessages: any;
  intervalFirstScroll: any;

  messagelist = [];
  lastMessagelist = [];
  currentRoomname: any;
  currentTarget: any;

  scrolledWhenInit = false;

  constructor(private dataServices: DataServices, private router: Router) {
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

    // mettre à jour la liste room à chaque retour de requête
    this.dialogueEvent = this.dataServices.dataReceived$.
    subscribe(
      () => {
        this.lastMessagelist = this.messagelist;

        this.currentRoomname = this.dataServices.roomname;
        this.currentTarget = this.dataServices.target;
        this.messagelist = this.dataServices.messagelist;
        
        if(this.messagelist.length > this.lastMessagelist.length){
          this.launchScrollPage();
        }

        if(this.dataServices.status === 'nologged'){
          this.router.navigate(['/login']);
        }
        
      }, //pour chaque next 

      () => {console.log("erreur de subscribe");}, //en cas d'erreur
      () => {console.log("changement number");} //en cas de complet
    );


    // lancer requête lecture room toutes les 5 sec
    this.intervalMessages = setInterval(
      () => {
        this.launchViewMessages();
      }
      , 5000);


    // lancer requête lecture room toutes les 5 sec
    this.intervalFirstScroll = setInterval(
      () => {
        console.log("Essai de scroll first");
        if(window.pageYOffset == 0 && this.scrolledWhenInit == false){
          this.launchScrollPage();
          this.scrolledWhenInit = true;
          clearInterval(this.intervalFirstScroll);
        }
      }
      , 500);


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

  launchScrollPage() {
    window.scrollTo(0, document.body.scrollHeight);
    console.log(window.pageYOffset);
  }

}
