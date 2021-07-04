import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataServices {

constructor(private httpClient: HttpClient) {}

// observables
dataReceived$ = new BehaviorSubject<any>(0); // détecte les récéptions de données

// sorties
username = "";
newusername = "";
password = "";
newpassword = "";
// $token = "";
target = "";
roomname = "";
message = "";

objectToSend = {};
objectToSendJson = {};

// entrées
response = "";
name = "leto"; // à changer en ""
status = "nologged";
token = "none";
number = "4"; // à changer en "0"
// contenant les messages [{messagedate: '', author: '', messagetext: ''}, {}]
messagelist = [
    {messagedate: '21/06/21 21:18:24', author: 'leto', messagetext: 'messagemessagemessagemessagemessagemessage'}, 
    {messagedate: '21/06/21 21:18:24', author: 'leto2', messagetext: 'messagemessagemessagemessagemessagemessage'}, 
    {messagedate: '21/06/21 21:18:24', author: 'leto', messagetext: 'messagemessagemessagemessagemessagemessage'}, 
    {messagedate: '21/06/21 21:18:24', author: 'leto', messagetext: 'messagemessagemessagemessagemessagemessage'}, 
    {messagedate: '21/06/21 21:18:24', author: 'leto', messagetext: 'messagemessagemessagemessagemessagemessage'}, 
    {messagedate: '21/06/21 21:18:24', author: 'leto', messagetext: 'messagemessagemessagemessagemessagemessage'}, 
    {messagedate: '21/06/21 21:18:24', author: 'leto', messagetext: 'messagemessagemessagemessagemessagemessage'}, 
    {messagedate: '21/06/21 21:18:24', author: 'leto', messagetext: 'messagemessagemessagemessagemessagemessage'}, 
    {messagedate: '21/06/21 21:18:24', author: 'leto', messagetext: 'messagemessagemessagemessagemessagemessage'}, 
    {messagedate: '21/06/21 21:18:24', author: 'leto', messagetext: 'messagemessagemessagemessagemessagemessage'}
];
// contenant les discussions [{target: '', roomname: '', datelastmessage: ''}, {}]
roomlist = [
    {target: 'moneo1', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b1', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo2', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo3', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b3', datelastmessage: '19/06/21 20:06:35'}
];

prepareDataObject(formData) {
    return formData;
}

resetDataAfterRequest() {
    console.log("reset des variables");
    this.newusername = "";
    this.password = "";
    this.newpassword = "";
    this.objectToSend = {};
    this.objectToSendJson = {};
}

sendRequestToPHP(formData) {}

sendRequestTest(formData) {
    console.log("switch");
    console.log(formData);
    switch(formData.action) {
        case 'createAccount': 
        // formData
        console.log("createAccount");
        break;
        case 'connectUser': console.log("connectUser");
        break;
        case 'logOutUser': console.log("logOutUser");
        break;
        case 'createRoom': console.log("createRoom");
        break;
        case 'sendMessage': console.log("sendMessage");
        break;
        case 'viewMessages': console.log("viewMessages");
        break;
        case 'viewRooms': console.log("viewRooms");
        break;
        case 'modifyUserName': console.log("modifyUserName");
        break;
        case 'modifyPassword': console.log("modifyPassword");
        break;
        case 'deleteRoom': console.log("deleteRoom");
        break;
        case 'deleteAccount': console.log("deleteAccount");
        break;
        default: console.log("detection aucun");
        break;
    }
}

}
