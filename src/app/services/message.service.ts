import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Message } from '../models/message';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  selectedMessage!: Message;
  allMessages!: Message[];

  readonly URL = 'http://localhost:8000/'

  constructor( private http: HttpClient) { 
    
  }

  getMessage() {
    return this.http.get(this.URL)
  }

  addMessage(message: Message) {
    return this.http.post(this.URL, message)
  }

  updateMessage(message: any) {
    return this.http.put(this.URL + `${message._id}`, message)
  }

  deleteMessage(_id: string) {
    return this.http.delete(this.URL + `${_id}`)
  }

}
