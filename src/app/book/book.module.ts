import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { BooksListComponent } from './components/book-list/books-list.component';
import { BooksDetailComponent } from './components/book-detail/books-detail.component';
import { SerchComponent } from '../sharedComponent/serch/serch.component';
import { SharedComponentModule } from '../sharedComponent/shared-component.module';


@NgModule({
  declarations: [
    BooksListComponent,
    BooksDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
    BookRoutingModule
  ]
})
export class BookModule { }
