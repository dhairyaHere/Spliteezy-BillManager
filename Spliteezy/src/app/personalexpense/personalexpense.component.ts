import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ExpensesService} from '../shared/expenses.service';
import {Expenses} from '../shared/expenses.model';
//declare var M : any;

declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-personalexpense',
  templateUrl: './personalexpense.component.html',
  styleUrls: ['./personalexpense.component.css'],
  providers :[ExpensesService]
})
export class PersonalexpenseComponent implements OnInit {

//  public collegetypes = ['IIT','NIT','IIIT'];

  constructor(private expenseService : ExpensesService) { }

  public konuadd:string;
  public fname:string = '';

//   showtab(){
//     $("#random").show();
//   }

//  hidetab(){
    
//         $("#random").hide();
//     }

  ngOnInit() {
    this.resetForm();
    this.fname =localStorage.getItem('fname');
    this.konuadd=localStorage.getItem("konuadd");
   // this.refreshCollegeInformationList();
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

      console.log(form.value.mode);

      if(form.value.mode == "equal")
      {
        console.log(form.value.amount);

        form.value.given_by = localStorage.getItem('username');
        form.value.given_to = this.fname;

        console.log(form.value.given_by);
        console.log(form.value.given_to);

        form.value.amount = form.value.amount / 2;
        console.log(form.value.amount);
      
      }
      else if (form.value.mode == "loss")
      {
        
        form.value.given_by = localStorage.getItem('username');
        form.value.given_to = this.fname;

        
        form.value.amount = 0-form.value.amount;

      }
      else if (form.value.mode == "loss_equal")
      {
        form.value.given_by = localStorage.getItem('username');
        form.value.given_to = this.fname;
        
        form.value.amount = (0-form.value.amount)/2;
            
      }
      else if (form.value.mode == "profit")
      {
        form.value.given_by = localStorage.getItem('username');
        form.value.given_to = this.fname;

        form.value.amount =0- (0-form.value.amount);
    
      }
      // else if(form.value.mode == "profit")
      // {
      //   form.value.amount = form.value.amount;
      // }

      console.log(form.value.amount);

      form.value.amount = Number(0 + form.value.amount);
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
      alert("Expense Added Successfully");
     }
    else {
      this.expenseService.putExpenses(form.value).subscribe((res) => {
        this.resetForm(form);
        
        
      });
    }
  }

  /*refreshCollegeInformationList() {
    this.collegeInformationService.getCollegeInformationList().subscribe((res) => {
      this.collegeInformationService.CollegeInformations = res as CollegeInformation[];
    });
  }*/

  /*onEdit(cinfo: CollegeInformation) {
    this.collegeInformationService.selectedCollegeInformation = cinfo;
  }*/

  /*onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.collegeInformationService.deleteCollegeInformation(_id).subscribe((res) => {
        this.refreshCollegeInformationList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }*/

}
