import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksDetailComponent } from './components/book-detail/books-detail.component';
import { BooksListComponent } from './components/book-list/books-list.component';

const routes: Routes = [
  { path: '', component: BooksListComponent },
  { path: ':id', component: BooksDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
