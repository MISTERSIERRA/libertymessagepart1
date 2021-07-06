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

// urlBackAdress = 'http://localhost/libertymessagepart2/BenchmarkBack/benchmarkback.php';

urlBackAdress = 'http://localhost/libertymessagepart2/index.php';

// entrées
response = "Liberty Message";
name = "";
status = "nologged";
token = "none";
number = "0";
// contenant les messages [{messagedate: '', author: '', messagetext: ''}, {}]
messagelist = [];
// contenant les discussions [{target: '', roomname: '', datelastmessage: ''}, {}]
roomlist = [];



resetDataAfterRequest() {
    console.log("reset des variables");
    this.newusername = "";
    this.password = "";
    this.newpassword = "";
    this.objectToSend = {};
    this.objectToSendJson = {};
    this.objectFromPHP = {};
}

resetDataWhenLogout() {
    this.name = "";
    this.username = "";
    this.messagelist = [];
    this.roomlist = [];
}

addValueFromObject(objectReceived: any) {
    if(objectReceived['response']){
        this.response = objectReceived['response'];
    }
    if(objectReceived['name']){
        this.name = objectReceived['name'];
        this.username = objectReceived['name'];
    }
    if(objectReceived['status']){
        this.status = objectReceived['status'];
        if(this.status === 'nologged'){
            this.resetDataWhenLogout();
        }
    }
    if(objectReceived['token']){
        this.token = objectReceived['token'];
    }
    if(objectReceived['number']){
        this.number = objectReceived['number'];
    }
    if(objectReceived['messagelist']){
        this.messagelist = objectReceived['messagelist'];
    }
    if(objectReceived['roomlist']){
        this.roomlist = objectReceived['roomlist'];
    }
}

sendRequestToPHP(formData) {
    this.objectToSendJson = JSON.stringify(formData);
    this.httpClient.post(this.urlBackAdress, this.objectToSendJson).subscribe(
      (response: any) => {
        // this.objectFromPHP = JSON.parse(response);
        
        if(response && response['response']){ // si reponse contient bien un élément
            this.objectFromPHP = response;
            console.log(this.objectFromPHP);
            console.log("Received : ");
            console.log(this.objectFromPHP);
            this.addValueFromObject(this.objectFromPHP)
            this.dataReceived$.next(0);
            this.resetDataAfterRequest();
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
