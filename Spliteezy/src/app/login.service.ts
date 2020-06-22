import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { mergeMap, switchMap, retry,   map, catchError, filter, scan } from 'rxjs/operators';
// import {}
export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {
  }

  validate(username: string, password: string): Observable<any> {
    // alert(username + '' + password);
    return this.http.post<HttpResponse<any>>('http://localhost:8000/login', {observe: 'response',
      uname: username,
      pswd: password
    });
  }
  fetch(username: string): Observable<any> {
    // alert(username);
    return this.http.post<HttpResponse<any>>('http://localhost:8000/fetch', {
      observe: 'response',
      uname: username
    });
  
}
  searchfrnd(username: string): Observable<any> {
    // alert(username );
    return this.http.post<HttpResponse<any>>('http://localhost:8000/abcd', {observe: 'response',
      uname: username
      
    });
    
  }

}
