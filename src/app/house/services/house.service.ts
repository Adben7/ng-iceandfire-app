import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { baseURL } from '../../shared/baseurl';
import { IHouse } from '../models/house';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  constructor(private http: HttpClient) { }

  getHouses():Observable<IHouse[]>{
    return this.http.get<IHouse[]>(`${baseURL}houses?pageSize=500`)
    .pipe(catchError(this.handleError));
  }

  getHouse(id: string):Observable<IHouse>{
    return this.http.get<IHouse>(`${baseURL}houses/${id}`);
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
