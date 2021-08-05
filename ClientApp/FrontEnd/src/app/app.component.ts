import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, AuthService } from './authentication/authorize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: User = null;

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
    this.router.navigate(["authentication/login"]);
  }
}
