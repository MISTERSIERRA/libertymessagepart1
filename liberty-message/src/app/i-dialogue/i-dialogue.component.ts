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

  messagelist = [];

  constructor(private dataServices: DataServices) {
    this.messagelist = this.dataServices.messagelist;
  }

  targetname = "destinataire";

  ngOnInit() {
    this.messagelist = this.dataServices.messagelist;
    this.targetname = this.dataServices.target;
  }

  onSubmit(form: NgForm) {
    let submitForm = form.value;
    
      this.dataServices.sendRequestTest(submitForm);
    }

}
