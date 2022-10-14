import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("name", "")
    localStorage.setItem("url", "")
  }

  login(username: string, url: string) {
    localStorage.setItem("name", username)
    localStorage.setItem("url", url)
    window.location.replace("/chat")
  }

}
