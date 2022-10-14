import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.css']
})
export class ChatComponentComponent implements OnInit {

  public messages: any[] = []

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem("name"));
    this.messageService.getMessage().subscribe(res => {
      console.log(res);
      this.messages.push(res)
      console.log(this.messages);
    })
  }


}
