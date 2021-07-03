import { Component, Input, OnInit } from '@angular/core';
import { DataServices } from '../services/data-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-c-discuss',
  templateUrl: './c-discuss.component.html',
  styleUrls: ['./c-discuss.component.scss']
})
export class CDiscussComponent implements OnInit {

  roomlist = [];
  roomnameToDelete = "";
  displayAddTarget = false;

  constructor(private dataServices: DataServices) {
    this.roomlist = this.dataServices.roomlist;
  }

  ngOnInit() {
    this.roomlist = this.dataServices.roomlist;
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

    // lancer le programme dans services viewMessages()
    console.log(objectViewMessages);

    this.dataServices.sendRequestTest(objectViewMessages);
  }

  launchDeletRoom(roomname) {
    this.dataServices.roomname = roomname;
    let action = 'deleteRoom';
    let objectDeleteRoom = {};

    // lancer le programme dans services deleteRoom()
    

    objectDeleteRoom['action'] = action;
    objectDeleteRoom['roomname'] = roomname;

    console.log(objectDeleteRoom);

    this.dataServices.sendRequestTest(objectDeleteRoom);
  }


}
