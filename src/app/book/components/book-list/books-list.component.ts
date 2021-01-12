import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { IBook } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books: IBook[];
  filteredBooks: IBook[];
   text = "";


  constructor(private bookService: BookService, private router: Router ) { }

  ngOnInit(): void {
    this.bookService.getBooks()
    .pipe(take(1))
    .subscribe(books =>{
       this.books = books;
       this.filteredBooks = books}
       );
  }

  filterList(text: string):void {

    let listFilter = text.toLocaleLowerCase();
    console.log(listFilter);

    this.filteredBooks = this.books.filter(book =>
      book.name.toLocaleLowerCase().indexOf(listFilter) !== -1);
  }

  goToBookDetail(url: string){
    let urlTab = url.split('/');
    let bookId = urlTab[5];

    this.router.navigate([`book/${bookId}`]);
  }
}
