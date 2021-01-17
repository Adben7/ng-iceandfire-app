import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { IBook} from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.scss']
})
export class BooksDetailComponent implements OnInit {

  book: IBook;

  constructor(private bookService: BookService, private rout: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let idBook = this.rout.snapshot.paramMap.get('id');

    this.bookService.getBook(idBook)
    .pipe(take(1))
    .subscribe(
      c => this.book = c
    );
  }


  goToDetail(url: string){
    let urlTab = url.split('/');
    let id = urlTab[5];
    let resource = urlTab[4];
    this.router.navigate([`${resource}/${id}`]);
  }

}
