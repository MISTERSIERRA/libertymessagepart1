import { Component, Input, OnInit } from '@angular/core';
import { DataServices } from '../services/data-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-c-discuss',
  templateUrl: './c-discuss.component.html',
  styleUrls: ['./c-discuss.component.scss']
})
export class CDiscussComponent implements OnInit {

  constructor(private dataServices: DataServices) {
    this.roomlist = this.dataServices.roomlist;
  }

  roomlist = [];

  ngOnInit() {
    this.roomlist = this.dataServices.roomlist;
  }

  launchViewMessages(roomname, targetname) {
    this.dataServices.target = targetname;
    // lancer le programme dans services viewMessages()
  }


}
