import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataServices } from '../services/data-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-c-discuss',
  templateUrl: './c-discuss.component.html',
  styleUrls: ['./c-discuss.component.scss']
})
export class CDiscussComponent implements OnInit {

  discussEvent: Subscription;
  intervalRoom: any;
  roomlist = [];
  roomnameToDelete = "";
  displayAddTarget = false;

  constructor(private dataServices: DataServices) {
    this.launchViewRooms();
    this.roomlist = this.dataServices.roomlist;
  }

  ngOnInit() {
    console.log("init room");
    // this.launchViewRooms();

    // lancer requête lecture room toutes les 5 sec
    this.intervalRoom = setInterval(
      () => {
        this.launchViewRooms();
      }
      , 5000);
    
    // mettre à jour la liste room à chaque retour de requête
    this.discussEvent = this.dataServices.dataReceived$.
    subscribe(
      () => {
        this.roomlist = this.dataServices.roomlist;
      }, //pour chaque next 

      () => {console.log("erreur de subscribe");}, //en cas d'erreur
      () => {console.log("changement number");} //en cas de complet
    );
  
  }

  ngOnDestroy() {
    console.log("destroy room");
    clearInterval(this.intervalRoom);
    this.dataServices.roomlist = [];
  }

  activateDeleteButton(roomname: any) {
    if(this.roomnameToDelete === roomname){
      this.roomnameToDelete = "";
    }
    else{
      this.roomnameToDelete = roomname;
    }
  }

  activateAddTarget() {
    if(this.displayAddTarget === false){
      this.displayAddTarget = true;
    }
    else{
      this.displayAddTarget = false;
    }
  }

  prepareViewMessages(roomname, targetname) {
    console.log("prepare messages");
    this.dataServices.roomname = roomname;
    this.dataServices.target = targetname;
  }

  launchDeletRoom(roomname) {
    this.dataServices.roomname = roomname;
    let action = 'deleteRoom';
    let objectDeleteRoom = {};

    // lancer le programme dans services deleteRoom()
    

    objectDeleteRoom['action'] = action;
    objectDeleteRoom['roomname'] = roomname;

    this.dataServices.sendRequestTest(objectDeleteRoom);
  }

  onSubmit(form: NgForm) {
    let submitForm = form.value;
    this.dataServices.sendRequestTest(submitForm);
  }

  launchViewRooms() {
    let action = 'viewRooms';
    let objectViewRooms = {};

    objectViewRooms['action'] = action;

    this.dataServices.sendRequestTest(objectViewRooms);
  }

}
