import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {

  constructor() { }

  public isDisabled1 = false;
  public isDisabled2 = false;
  public isDisabled3 = false;
  public isDisabled4 = false;
  public isDisabled5 = false;
  
  testing1(){
    // alert("in testing method");
    this.isDisabled1 = !this.isDisabled1;
    return;
  }

  testing2(){
    // alert("in testing method");
    this.isDisabled2 = !this.isDisabled2;
    return;
  }
  testing3(){
    // alert("in testing method");
    this.isDisabled3 = !this.isDisabled3;
    return;
  }
  testing4(){
    // alert("in testing method");
    this.isDisabled4 = !this.isDisabled4;
    return;
  }
  testing5(){
    // alert("in testing method");
    this.isDisabled5 = !this.isDisabled5;
    return;
  }

  ngOnInit() {
  
  }

 showtab(){
    $("#random").show();
  }

 hidetab(){
    
        $("#random").hide();
    }

     
// edtb1(cb) {
       
//   var tb1 = <HTMLInputElement> document.getElementById("amount1");
//   tb1.disabled = cb.checked ? false : true;

// //     var count = 5 ;
// // for( var i=0 ; i<count ; i++)
// // {
// //     $("#amount"+(i+1)).disabled = $("#acheck"+(i+1)).checked ? false : true;
// // }
// }
 
// edtb2(cb) {
 
//  var tb1 = <HTMLInputElement>document.getElementById("amount2");
//  tb1.disabled = cb.checked ? false : true;
// }
// edtb3(cb) {
 
//  var tb1 =<HTMLInputElement> document.getElementById("amount3");
//  tb1.disabled = cb.checked ? false : true;
// }
// edtb4(cb) {
 
//  var tb1 = <HTMLInputElement>document.getElementById("amount4");
//  tb1.disabled = cb.checked ? false : true;
// }
// edtb5(cb) {
 
//  let tb1 = <HTMLInputElement>document.getElementById("amount5");
//  tb1.disabled = cb.checked ? false : true;
// }

}
