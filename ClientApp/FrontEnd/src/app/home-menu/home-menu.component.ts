import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/authorize.service';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

  username: string = '';
  role: string = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  logout() {
    this.authService.logout();
  }

  getUser() {
    this.username = this.authService.getUserName();
    this.role = this.authService.getUserRole();
  }
}
