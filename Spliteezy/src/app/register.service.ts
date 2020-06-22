import { Injectable } from '@angular/core';
import { User } from './User.model';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { mergeMap, switchMap, retry, map, catchError, filter, scan } from 'rxjs/operators';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }
  registerusers(user1: User): Observable<any> {
    return this.http.post<HttpResponse<any>>('http://localhost:8000/register', user1 , httpOptions);
  }
  updateaccount(user1: User): Observable<any> {
    // alert('hiii');
    return this.http.post<HttpResponse<any>>('http://localhost:8000/updateaccount', user1 , httpOptions);
  }
}
