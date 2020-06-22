import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import {  Expenses } from './expenses.model';

@Injectable()
export class ExpensesService {
  selectedExpenses: Expenses;
  MultiExpenses: Expenses[];
  readonly baseURL = 'http://localhost:3000/expenseInfo';

  constructor(private http: HttpClient) { }

  postExpenses(einfo: Expenses) {
 //  console.log(cinfo.image_path);
    return this.http.post(this.baseURL, einfo);
  }

  getExpensesList():Observable<any> {
    return this.http.get<HttpResponse<any>>(this.baseURL);
  }

 /* getExpensesListByCode(collegecode)
  {
    console.log(this.baseURL + '/code/' +`${collegecode}`);
    console.log(this.http.get(this.baseURL +`/code/${collegecode}`));
    return this.http.get(this.baseURL +`/code/${collegecode}`);
  }*/

  putExpenses(einfo: Expenses) {
//  console.log(cinfo.image_path);
    return this.http.put(this.baseURL + `/${einfo._id}`,einfo);
  }

  deleteExpenses(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}