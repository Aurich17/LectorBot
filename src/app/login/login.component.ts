// import { Component, Input, OnInit } from '@angular/core';
// import  * as LandBot from '@landbot/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   @Input()
//   core = LandBot.Core;  

//   chatHistory;
//   title = "Landbot History Chat Angular";

//   constructor() {
//     this.chatHistory = {
//         messages: [],
//     }
//   }

//   ngOnInit() {
//     // Initializate core
//     var parent = this;
//     this.core.OnI
//   }


//   orderedMessages (){
//     return this.chatHistory.messages
//       .filter(this.messagesFilter)
//       .sort((a, b) => a.timestamp - b.timestamp);
//   }

//   // Utils
//  parseMessages(messages) {
//    const objMessage = [];
//    Object.keys(messages).forEach((messageKey)=> {
//      objMessage.push(this.parseMessage(messages[messageKey]));
//    })
//   return objMessage;
//   }

//   parseMessage(data) {
//     return {
//       key: data.key,
//       text: data.title || data.message,
//       author: data.samurai !== undefined ? 'bot' : 'user',
//       timestamp: data.timestamp,
//       type: data.type,
//     };
//   }

//   /** Support for basic messages */
//   messagesFilter(data) {
//     return ['text', 'dialog'].includes(data.type);
//   }

//   scrollBottom(container) {
//     container.scrollTop = container.scrollHeight;
//   }

// }
