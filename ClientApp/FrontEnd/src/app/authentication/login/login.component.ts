import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  login() {
    this.http.post<any>('http://localhost:8095/authenticate', { username: this.username, password: this.password }).subscribe(result => {
      localStorage.setItem("token", result.jwt);
      console.log("JWT in local storage: " + localStorage.getItem("token"));
    }, error => {
      console.error(error);
      console.log(error.status);
    });
  }
}
