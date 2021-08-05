import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, AuthService } from './authentication/authorize.service';
import { EventEmitterService } from './shared/utils/EventEmitterService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: User = null;

  constructor(private authService: AuthService,
    private eventEmitterService: EventEmitterService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.eventEmitterService.eventEmitter.subscribe(() => this.load());
  }

  load() {
    this.user = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
  }

  login() {
    this.router.navigate(["authentication/login"]);
  }
}
