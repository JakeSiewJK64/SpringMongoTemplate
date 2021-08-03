import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../authentication/authorize.service';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
  }

  login() {
    this.router.navigate(["authenticate/login"]);
  }
}
