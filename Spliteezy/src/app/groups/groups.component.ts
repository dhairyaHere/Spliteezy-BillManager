import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(public router : Router) { }


  ngOnInit() {
  }

  myNewGroup(){
    this.router.navigate(['../CreateGroup']);

  }
  
  grouptab(){
    this.router.navigate(['../Groups']);
    
  }
  
  friendtab(){
    this.router.navigate(['../Friends']);
    
  }

}
