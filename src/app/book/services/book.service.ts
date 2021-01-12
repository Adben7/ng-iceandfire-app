import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { baseURL } from '../../shared/baseurl';
import { IBook } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks():Observable<IBook[]>{
    return this.http.get<IBook[]>(`${baseURL}books`)
    .pipe(catchError(this.handleError));
  }

  getBook(id: string):Observable<IBook>{
    return this.http.get<IBook>(`${baseURL}books/${id}`);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
     // client-side error
     errorMessage = `An error occurred: ${err.error.message}`;
    } else {
     // server-side error
     errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
