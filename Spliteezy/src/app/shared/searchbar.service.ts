import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../User.model' ;


@Injectable({
  providedIn: 'root'

})
export class SearchbarService {
  public selectedUser : User;
  public Users : User[];
  readonly baseURL = 'http://localhost:3000/searchUser';

  constructor(private http: HttpClient) { }
  getFriendList() {
    console.log('second lap');
    return this.http.get(this.baseURL);
  }

  getExpensesList():Observable<any> {
    return this.http.get<HttpResponse<any>>('http://localhost:3000/expenseInfo');
  }
}
