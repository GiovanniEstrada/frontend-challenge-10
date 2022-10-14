import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css'],
  providers: [MessageService]
})
export class InputboxComponent implements OnInit {


  public linkImage: any = localStorage.getItem("url");
  

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  addMessage(message: any) {
    const date = new Date()
    console.log(date.toLocaleDateString());
    if(message.value == "") {
      console.log("Campo Vacio");
    }
    else {
      const data = {
        "id": "0",
        "name": localStorage.getItem("name"),
        "message": message.value,
        "url": this.linkImage,
        "reactions": 0,
        "date": `${date.getHours()}:${date.getMinutes()} ${date.toLocaleDateString()}`,
        "replies": []
      }
  
      console.log(data);
  
      this.messageService.addMessage(data).subscribe(res => {
        console.log(res);
      })
  
      window.location.reload()

    }

  }

}
