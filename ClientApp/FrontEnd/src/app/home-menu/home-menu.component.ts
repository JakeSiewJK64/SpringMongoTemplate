import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../authentication/authorize.service';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.user = this.authService.getUser();
  }
}
