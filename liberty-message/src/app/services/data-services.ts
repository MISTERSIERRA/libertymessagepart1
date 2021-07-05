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

objectFromPHP = {};

// entrées
response = "Liberty Message";
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
    {target: 'moneo3', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b3', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo4', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b4', datelastmessage: ''}
];

// prepareDataObject(formData) {
//     return formData;
// }

resetDataAfterRequest() {
    console.log("reset des variables");
    this.newusername = "";
    this.password = "";
    this.newpassword = "";
    this.objectToSend = {};
    this.objectToSendJson = {};
    this.objectFromPHP = {};
}

sendRequestToPHP(formData) {
    this.objectToSendJson = JSON.stringify(formData);
    this.httpClient.post('mettre lien vers php ici', this.objectToSendJson).subscribe(
      (response: any) => {
        this.objectFromPHP = JSON.parse(response);
        if(this.objectFromPHP['response']){ // si reponse contient bien un élément
            this.response = this.objectFromPHP['response'];
            console.log("Received : ");
            console.log(this.objectFromPHP);
        }else{
            console.log("erreur de reception");
        }
      },    (error) => {
                console.log(error);
            }
    );
}

sendRequestTest(formData) {
    console.log("switch");
    
    switch(formData.action) {
        case 'createAccount': 
        formData['passwordVerify'] = 'verified';
        console.log("createAccount");
        break;
        case 'connectUser': console.log("connectUser");
        break;
        case 'logOutUser': console.log("logOutUser");
        formData['username'] = this.username;
        formData['token'] = this.token;
        break;
        case 'createRoom': console.log("createRoom");
        formData['username'] = this.username;
        formData['token'] = this.token;
        break;
        case 'sendMessage': console.log("sendMessage");
        formData['username'] = this.username;
        formData['token'] = this.token;
        formData['roomname'] = this.roomname;
        break;
        case 'viewMessages': console.log("viewMessages");
        formData['username'] = this.username;
        formData['token'] = this.token;
        break;
        case 'viewRooms': console.log("viewRooms");
        formData['username'] = this.username;
        formData['token'] = this.token;
        break;
        case 'modifyUserName': console.log("modifyUserName");
        formData['username'] = this.username;
        formData['token'] = this.token;
        break;
        case 'modifyPassword': console.log("modifyPassword");
        formData['passwordVerify'] = 'verified';
        formData['username'] = this.username;
        formData['token'] = this.token;
        break;
        case 'deleteRoom': console.log("deleteRoom");
        formData['username'] = this.username;
        formData['token'] = this.token;
        break;
        case 'deleteAccount': console.log("deleteAccount");
        formData['username'] = this.username;
        formData['token'] = this.token;
        break;
        default: console.log("detection aucun");
        break;
    }

    console.log(formData);
    this.objectToSend = formData;
    this.sendRequestToPHP(this.objectToSend);
}

}
