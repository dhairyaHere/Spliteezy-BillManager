import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchbarService } from '../shared/searchbar.service';
import { User } from '../User.model';
import { Expenses } from '../shared/expenses.model';
import { ExpensesService } from '../shared/expenses.service';
import { EventEmitter } from 'events';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  expenses: Expenses[];
  // @Output() public sum = new EventEmitter();
  
  constructor(public router: Router, private exp: SearchbarService) { }
  public x;
  public username:string;
  public suml = 0;
  public sumr = 0;

  

  ngOnInit() {
    
    this.username = localStorage.getItem('username');
    this.exp.getExpensesList().subscribe(data =>{ this.expenses = data;
      console.log(this.expenses);
      this.expenses.forEach(element => {
        if(element.given_by==this.username)
        {
          if(element.amount<0)
          {
            this.suml+=element.amount;
          }
          else if (element.amount > 0)
          {
            this.sumr+=element.amount;
          }
        }
        
      });

      // this.sum.emit(this.suml.toString(),this.sumr.toString());

      localStorage.setItem('suml',this.suml.toString());
      localStorage.setItem('sumr',this.sumr.toString());

      console.log("sum l "+this.suml+" sum r "+this.sumr);
    });
      
      
  }
  
  ltog1(x:string) {
    console.log(x);
    $("#"+x+"div").slideToggle("slow");
  }
  navadd(x:string) {
    localStorage.setItem('fname',x);
    //alert(localStorage.getItem('konuadd'));
    this.router.navigate(['../AddPersonalExpense']);
  }

  navsettle(x:string) {
    localStorage.setItem('fname',x);
    //alert(localStorage.getItem('konuadd'));
    this.router.navigate(['../SettleUp']);
  }
  
  // rtog3() {
  //   $("#rpanel3").slideToggle("slow");
  // }

 
}
