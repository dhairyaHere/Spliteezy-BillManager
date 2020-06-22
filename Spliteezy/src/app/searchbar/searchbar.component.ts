import { Component, OnInit } from '@angular/core';
import {User} from '../User.model';
import {SearchbarService} from '../shared/searchbar.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';


declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  providers : [SearchbarService]
})
export class SearchbarComponent implements OnInit {

  public selectedUser : User;
  public Users : User[];
  public searchf ='';
  public frndname;
  public errormsg=" ";
  public fname;
  //public fname="";

  constructor(public authenticate: LoginService,private router : Router, private searchbarService : SearchbarService) { }

  ngOnInit() {
    console.log("hiii");
    this.fname = localStorage.getItem("fname");
    this.refreshFriendList();
    
  }
  onSubmit(form: NgForm) {
    // alert('hii');
    this.frndname = form.value.searchf;
    // alert(this.searchf);

    this.authenticate.searchfrnd(this.searchf).subscribe(r => {
      this.selectedUser = r;
      console.log(this.selectedUser);
      //console.log(r.username);
      if (this.selectedUser) {
        // this.error = false;
        
        localStorage.setItem('fname',r.username); 
        window.location.href = '../AddPersonalExpense';
      } else {
        // this.error = true;
        this.errormsg = ' Username Not found';
      }
    });
  }
  // 

  refreshFriendList() {
    console.log('first lap');
    this.searchbarService.getFriendList().subscribe((res) => {
      this.searchbarService.Users = res as User[];
      console.log(this.Users);
    });
  }

}
