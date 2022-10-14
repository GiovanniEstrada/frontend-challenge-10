import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'src/app/services/message.service'; 

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() database:any;
  public youMessage: boolean = false;
  public repliesAble: boolean = false;
  
  constructor(public messageService : MessageService ) { }
  
  
  ngOnInit(): void {
    this.validate()
  }
  
  public  increment = (database: any) => {
    debugger
    const reactions = database.reactions++
    const data = {
      "_id" : database._id,
      "id" : database.id,
      "name" : database.name,
      "message" : database.message,
      "url" : database.url,
      "reactions" : reactions,
      "date" : database.date,
      "replies" : database.replies,
    }
    this.messageService.updateMessage(data).subscribe(res =>{
      console.log(res);
    })
  }
  public  decrement = (database: any) => {
    const data = {
      "_id" : database._id,
      "id" : database.id,
      "name" : database.name,
      "message" : database.message,
      "url" : database.url,
      "reactions" : database.reactions--,
      "date" : database.date,
      "replies" : database.replies,
    }
    this.messageService.updateMessage(data).subscribe(res =>{
      console.log(res);
    })
  }

  validate() {
    const name = localStorage.getItem("name")
    if(name == this.database.name){
      this.youMessage = true
    }
    if(this.database.reply != undefined){
      this.repliesAble = true;
    }
  }

  deleteMessage(id:any) {
    console.log(id);
    this.messageService.deleteMessage(id).subscribe(res => {
      console.log(res);
    })
  
  }

}
