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

  constructor(private dataServices: DataServices) {
    this.roomlist = this.dataServices.roomlist;
  }

  ngOnInit() {
    this.roomlist = this.dataServices.roomlist;
  }

  activateDeleteButton(roomname) {
    if(this.roomnameToDelete === roomname){
      this.roomnameToDelete = "";}
    else{
      this.roomnameToDelete = roomname;
    }
  }

  launchViewMessages(roomname, targetname) {
    this.dataServices.target = targetname;
    // lancer le programme dans services viewMessages()
    console.log('launchViewMessages');
  }

  launchDeletRoom(roomname) {
    this.dataServices.$roomname = this.roomnameToDelete;
    // lancer le programme dans services deleteRoom()
    console.log('launchDeletRoom');
  }


}
