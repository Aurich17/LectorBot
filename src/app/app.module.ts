import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
// import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
// import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [		
    AppComponent,
      ChatComponent,
      // LoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
