import { Component, OnInit } from '@angular/core';
import { Book, BooksClient } from '../api-resource/api-resource';
import { AuthService, User } from '../authentication/authorize.service';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'category', 'author'];
  dataSource: Book[] = [];
  user: User;

  constructor(private authService: AuthService,
    private bookService: BooksClient) {
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.user = this.authService.getUser();
    this.bookService.getAllBooks().subscribe(x => {
      this.dataSource = x;
      console.log(x);
      
    });
  }
}
