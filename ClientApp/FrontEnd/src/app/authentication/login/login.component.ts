import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authorize.service';
import { SHA256, enc } from 'crypto-js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(
    private authservice: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.authservice.login(this.username, SHA256(this.password).toString(enc.Hex));
  }
}
