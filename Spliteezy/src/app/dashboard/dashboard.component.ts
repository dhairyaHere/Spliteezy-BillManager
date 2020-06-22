import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public router:Router) { }

  public suml;
  public sumr;
  public net:number;
  

  ngOnInit() {
    this.suml=localStorage.getItem("suml");
    this.sumr=localStorage.getItem("sumr");
    
    if(this.suml > this.sumr)
    {
      this.net =0 -( Number(this.sumr)+Number(this.suml) );
    }
    else{
      this.net = Number(this.sumr)+Number(this.suml);
    }
    
  }

  amount_calc(suml,sumr)
  {
    this.suml=suml;
    this.sumr=sumr;

    console.log("dash "+this.suml + "  " + suml);
  }
  
}
