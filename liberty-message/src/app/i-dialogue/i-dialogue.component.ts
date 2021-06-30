import { Component, Input, OnInit } from '@angular/core';
import { DataServices } from '../services/data-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-i-dialogue',
  templateUrl: './i-dialogue.component.html',
  styleUrls: ['./i-dialogue.component.scss']
})
export class IDialogueComponent implements OnInit {

  constructor(private dataServices: DataServices) {
    this.messagelist = this.dataServices.messagelist;
  }

  targetname = "destinataire";

  messagelist = [];

  ngOnInit() {
    this.messagelist = this.dataServices.messagelist;
    this.targetname = this.dataServices.target;
  }

  

}
