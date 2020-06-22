import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { mergeMap, switchMap, retry, map, catchError, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeleteaccountService {

  constructor(private http: HttpClient) { }

  deleteaccount(username: string): Observable<any> {
    // alert(username);
    return this.http.delete<HttpResponse<any>>('http://localhost:8000/deleteaccount/' + username);
  }
}
