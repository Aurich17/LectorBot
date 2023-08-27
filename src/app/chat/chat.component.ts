import { Component, Input, OnInit } from '@angular/core';
import { ChatInterface } from '../interfaces/chat.interface';
// import * as LandBot from '@landbot/core';
declare var Landbot: any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit {

  ngOnInit(): void {
    this.loadLandbotScript();
  }

  loadLandbotScript() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.addEventListener('load', () => {
      const myLandbot = new Landbot({
        configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-1700783-6E9XYWLGU90NABJK/index.json',
      });
    });
    s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
    document.head.appendChild(s);
  }
}