import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/authorize.service';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem("token");
  }
}
