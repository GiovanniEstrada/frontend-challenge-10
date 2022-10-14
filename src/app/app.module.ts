import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './components/messages/messages.component';
import { InputboxComponent } from './components/inputbox/inputbox.component';
import { FormsModule } from '@angular/forms';
import { ChatComponentComponent } from './pages/chat-component/chat-component.component';
import { LoginComponent } from './pages/login/login.component';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    InputboxComponent,
    ChatComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
