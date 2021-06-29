import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Subject, BehaviorSubject } from 'rxjs';

export class DataServices {

constructor() {}

// observables
test$ = new BehaviorSubject<any>("1"); // à modifier

// sorties
$username = "";
$newusername = "";
$password = "";
$newpassword = "";
$token = "";
$target = "";
$roomname = "";
$message = "";

// entrées
response = "";
name = "";
status = 'nologged';
token = 'none';
number: '';
messagelist = [];   // contenant les messages [{messagedate: '', author: '', messagetext: ''}, {}]
roomlist = [];      // contenant les discussions [{target: '', roomname: '', datelastmessage: ''}, {}]


resetDataAfterRequest() {
    console.log("reset des variables");
}





}
