import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authorize.service';

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
    this.authservice.login(this.username, this.password);
  }
}
