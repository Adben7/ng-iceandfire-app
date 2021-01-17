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
    .subscribe(fetchedbooks =>{
       this.books = fetchedbooks;
       this.filteredBooks = fetchedbooks}
       );
  }

  filterList(value: string):void {

    let listFilter = value.toLocaleLowerCase();
    console.log(listFilter);

    this.filteredBooks = this.books.filter(book =>
      book.name.toLocaleLowerCase().indexOf(listFilter) !== -1);
  }

  goToDetail(url: string){
    let urlTab = url.split('/');
    let id = urlTab[5];
    let resource = urlTab[4];
    this.router.navigate([`${resource}/${id}`]);
  }
}
