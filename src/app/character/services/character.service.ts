import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { baseURL } from '../../shared/baseurl';
import { ICharacter } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters():Observable<ICharacter[]>{
    return this.http.get<ICharacter[]>(`${baseURL}characters?pageSize=500`)
    .pipe(catchError(this.handleError));
  }

  getCharacter(id: string):Observable<ICharacter>{
    return this.http.get<ICharacter>(`${baseURL}characters/${id}`);
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
