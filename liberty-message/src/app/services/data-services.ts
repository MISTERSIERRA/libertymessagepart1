

import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataServices {

constructor(private authService: AuthService, private httpClient: HttpClient) {}



// détecte les récéptions de données
dataReceived$ = new BehaviorSubject<any>(0); 
startLoaderPicture$ = new BehaviorSubject<any>(0);

// sorties
username = "";
newusername = "";
password = "";
newpassword = "";
target = "";
roomname = "";
message = "";

objectToSend = {};
objectToSendJson = {};

objectFromPHP = {};

// urlBackAdress = 'http://localhost/libertymessagepart2/BenchmarkBack/benchmarkback.php';
// urlBackAdress = 'https://lesshadoks.000webhostapp.com/liberty-message/';
// urlBackAdress = 'https://lesshadoks.yn.lu/liberty-message/';
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

// illustration du chargement attente de réponse du serveur
loaderPicture = 'off';

activateLoaderPicture() {
    this.loaderPicture = 'on';
    this.startLoaderPicture$.next(0); // méthode next()
}

desactivateLoaderPicture() {
    this.loaderPicture = 'off';
    this.startLoaderPicture$.next(0); // méthode next()
}

resetDataAfterRequest() {
    // console.log("reset des variables");
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
            this.authService.isAuth = false;
        }
        else if(this.status === 'logged'){
            this.authService.isAuth = true;
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
        if(objectReceived['roomlist'][0].roomname == null){
            this.roomlist = [];
        }
        else if(objectReceived['roomlist'][0].roomname != null){
            this.roomlist = objectReceived['roomlist'];
        }
    }
}

sendRequestToPHP(formData) {
    this.objectToSendJson = JSON.stringify(formData);
    this.httpClient.post(this.urlBackAdress, this.objectToSendJson).subscribe(
        (response: any) => {
            if(response && response['response']){ 
                this.objectFromPHP = response;
                // console.log("Received : ");
                // console.log(this.objectFromPHP);
                this.addValueFromObject(this.objectFromPHP)

                this.desactivateLoaderPicture();

                this.dataReceived$.next(0); // méthode next()
                this.resetDataAfterRequest();
            }else{
                console.log("erreur de reception");
            }
        },   
        (error) => {
                console.log(error);
                this.desactivateLoaderPicture();
        }
    );
}

sendRequestTest(formData) {
    // console.log("switch");
    
    switch(formData.action) {
        case 'createAccount': 
        this.activateLoaderPicture();
        formData['passwordVerify'] = '';
        // console.log("createAccount");
        break;
        case 'connectUser': 
        this.activateLoaderPicture();
        // console.log("connectUser");
        break;
        case 'logOutUser': 
        this.activateLoaderPicture();
        // console.log("logOutUser");
        formData['username'] = this.username;
        formData['token'] = this.token;
        break;
        case 'createRoom': 
        this.activateLoaderPicture();
        // console.log("createRoom");
        formData['username'] = this.username;
        formData['token'] = this.token;
        break;
        case 'sendMessage': 
        // console.log("sendMessage");
        formData['username'] = this.username;
        formData['token'] = this.token;
        formData['roomname'] = this.roomname;
        break;
        case 'viewMessages': 
        // console.log("viewMessages");
        formData['username'] = this.username;
        formData['token'] = this.token;
        break;
        case 'viewRooms': 
        // console.log("viewRooms");
        formData['username'] = this.username;
        formData['token'] = this.token;
        break;
        case 'modifyUserName': 
        this.activateLoaderPicture();
        // console.log("modifyUserName");
        formData['username'] = this.username;
        formData['token'] = this.token;
        break;
        case 'modifyPassword': 
        this.activateLoaderPicture();
        // console.log("modifyPassword");
        formData['passwordVerify'] = '';
        formData['username'] = this.username;
        formData['token'] = this.token;
        break;
        case 'deleteRoom': 
        this.activateLoaderPicture();
        // console.log("deleteRoom");
        formData['username'] = this.username;
        formData['token'] = this.token;
        break;
        case 'deleteAccount': 
        this.activateLoaderPicture();
        // console.log("deleteAccount");
        formData['username'] = this.username;
        formData['token'] = this.token;
        break;
        default: console.log("detection aucun");
        break;
    }

    // console.log(formData);
    this.objectToSend = formData;
    this.sendRequestToPHP(this.objectToSend);
}

}
