import { Component, OnInit } from '@angular/core';
import { Books } from '../api-resource/api-resource';
import { AuthService, User } from '../authentication/authorize.service';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'category', 'author'];
  dataSource: Books[] = [
    { name: "Clean Code", author: "James", category: 1, price: 17.99 }
  ];
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
