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
  roomlist = [];
  roomnameToDelete = "";
  displayAddTarget = false;

  constructor(private dataServices: DataServices) {
    this.roomlist = this.dataServices.roomlist;
  }

  ngOnInit() {
    this.launchViewRooms();

    this.discussEvent = this.dataServices.dataReceived$.
    subscribe(
      () => {
        this.roomlist = this.dataServices.roomlist;
      }, //pour chaque next 

      () => {console.log("erreur de subscribe");}, //en cas d'erreur
      () => {console.log("changement number");} //en cas de complet
    );
  
  }

  activateDeleteButton(roomname) {
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

  launchViewMessages(roomname, targetname) {
    this.dataServices.target = targetname;
    this.dataServices.roomname = roomname;
    let action = 'viewMessages';
    let objectViewMessages = {};

    objectViewMessages['action'] = action;
    objectViewMessages['roomname'] = roomname;

    this.dataServices.sendRequestTest(objectViewMessages);
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
