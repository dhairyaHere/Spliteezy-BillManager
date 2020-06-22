import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../User.model';
import { DeleteaccountService } from '../deleteaccount.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  user: User = {
    username: '',
    password: '',
    email: '',
    fullname: '',
    contact: null
  };

  errormsg: string;
  constructor(private login: LoginService, private del: DeleteaccountService, private router: Router) {
    if (localStorage.getItem('username')) {
      this.login.fetch(localStorage.getItem('username')).subscribe(data => {
        this.user = data;
      });
    } else {
      window.location.href = '../Home';
    }

  }

  ngOnInit() {
    this.errormsg = '';
  }

  deleteaccount() {
    this.del.deleteaccount(localStorage.getItem('username')).subscribe(data => {
      if (data.status) {
        localStorage.removeItem('username');
        // localStorage.removeItem('movie');
        // localStorage.removeItem('theatre');
        // localStorage.removeItem('fullname');
        window.location.href = '../Home';
      } else {
        this.errormsg = 'Something went wrong';
      }
    });
  }

  editaccount() {
    // alert('hiii');
    this.router.navigate(['../Myaccount/edit'], { state: { data: [this.user] } });
  }

}
