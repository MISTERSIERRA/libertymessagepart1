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
target = "";
$roomname = "";
$message = "";

// entrées
response = "";
name = "";
status = 'nologged';
token = 'none';
number: '';
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
    {target: 'moneo1', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo2', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo3', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo1', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo2', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo3', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo1', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo2', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo3', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo1', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo2', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo3', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo1', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo2', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo3', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo1', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo2', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo3', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo1', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo2', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo3', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo1', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo2', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo3', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}, 
    {target: 'moneo4', roomname: '545335f79d733f980070c3b54e55018f47d04014fe7bde46653a8daa21c5a2b2', datelastmessage: '19/06/21 20:06:35'}
];


resetDataAfterRequest() {
    console.log("reset des variables");
}





}
