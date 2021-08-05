import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book, BooksClient, UserRole } from '../api-resource/api-resource';
import { AuthService, User } from '../authentication/authorize.service';
import { BookDetailsDialogComponent } from './_dialogs/book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'category', 'author'];
  dataSource: Book[] = [];
  user: User;
  isReadOnly: boolean = true;

  constructor(private authService: AuthService,
    private matDialog: MatDialog,
    private bookService: BooksClient) {
    this.user = this.authService.getUser();
    this.isReadOnly = this.user ? this.user.role != UserRole.Administrator : true;
  }

  ngOnInit(): void {
    this.load();
  }

  addBook() {
    const dialogRef = this.matDialog.open(BookDetailsDialogComponent, {
      width: "800px",
      data: {
        book: new Book()
      }
    });
    dialogRef.afterClosed().subscribe(x => {
      this.bookService.upsertBook(x).subscribe(x => {
        console.log(x);
      })
    })
  }

  load() {
    this.bookService.getAllBooks().subscribe(x => {
      this.dataSource = x;
    });
  }
}
