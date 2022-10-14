import { Component, OnInit } from '@angular/core';

interface Messages {
  info: string;
  reactions: number;
  replies: any[];
  name: string;
  date: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend-challenge-10';
  public database!: Messages[]
  
  ngOnInit(): void {
    this.database = [{
      info: `Impressive! Though it seems the drag feature could ve inproved. But overall it looks incredible
       You've nailed the desing and the responsiveness at various breakpoints works really well`,
       reactions: 5,
       replies: [],
       name: "amyrobson",
       date: "1 month ago",
       image: "../assets/images/avatars/image-amyrobson.png"
    }]
    console.log(this.database);
  }
}
