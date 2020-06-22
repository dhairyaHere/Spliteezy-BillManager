import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ExpensesService} from '../shared/expenses.service';
import {Expenses} from '../shared/expenses.model';

declare var jquery:any;
declare var $:any;


@Component({
  selector: 'app-settle',
  templateUrl: './settle.component.html',
  styleUrls: ['./settle.component.css'],
  providers :[ExpensesService]
})
export class SettleComponent implements OnInit {

  public konuadd:string;
  public fname:string = '';


  constructor(private expenseService : ExpensesService) { }

  ngOnInit() {
    this.resetForm();
    this.fname =localStorage.getItem('fname');
    this.konuadd=localStorage.getItem("konuadd");
   
  
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.expenseService.selectedExpenses = {
      _id: null,
      given_by : "",
      given_to : "",
      group_name : "",
      amount :null,
    }
  }

  onSubmit(form: NgForm) {
    console.log('over here');
   //  console.log(form.value.college_name);
     if(form.value._id == null){
       console.log('Insile sibknfv');
 
      
       // else if(form.value.mode == "profit")
       // {
       //   form.value.amount = form.value.amount;
       // }
 
       console.log(form.value.amount);
 
       form.value.amount = Number(0 - form.value.amount);
       this.expenseService.postExpenses(form.value).subscribe((res) => {
         // this.resetForm(form);
       });
 
       let temp  =  form.value.given_by;
       form.value.given_by  =  form.value.given_to;
       form.value.given_to  = temp;
 
       form.value.amount = 0 - form.value.amount;
 
       this.expenseService.postExpenses(form.value).subscribe((res) => {
         this.resetForm(form);
         localStorage.removeItem('konuadd');
       });
       alert("Payment Settled Up with the entered amount !");
 
      }
     else {
       this.expenseService.putExpenses(form.value).subscribe((res) => {
         this.resetForm(form);
         
       });
     }
   }
 



}
