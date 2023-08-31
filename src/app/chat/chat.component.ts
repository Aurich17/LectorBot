import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ChatInterface } from '../interfaces/chat.interface';
// import * as LandBot from '@landbot/core';
import {MatButtonModule} from '@angular/material/button';
declare var Landbot: any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    // Obtén los elementos del DOM
  }  
}