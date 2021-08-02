import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/authorize.service';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

  username: string = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getUserName();
  }

  logout() {
    this.authService.logout();
  }

  getUserName() {
    this.username = this.authService.getUserName();
  }
}
