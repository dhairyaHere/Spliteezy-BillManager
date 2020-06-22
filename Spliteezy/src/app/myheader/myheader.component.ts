import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../User.model';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-myheader',
  templateUrl: './myheader.component.html',
  styleUrls: ['./myheader.component.css']
})
export class MyheaderComponent implements OnInit {

  public username;
  public password;
  public user:User;
  public errormsg;
  public email: string;
  public repassword;
  public mobile: number;

  constructor(public authenticate: LoginService, private router: Router, private register: RegisterService) { }

  formdata: FormGroup;
  public fullname: string;
  public loggedin;
  ngOnInit() {

    this.formdata = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('')
      ])),
      password: new FormControl('')
    });

    $(document).ready(() => {
      this.loggedin = false;

      if (localStorage.getItem('fullname')) {
        this.fullname = localStorage.getItem('fullname');
        this.loggedin = true;
      }
      this.errormsg = '';
      $('#login').click(() => {
        // alert('Register');
        $('#registermodal').modal('hide');
        $('#loginmodal').modal('show');
      });
      $('#register').click(() => {
        // alert('Register');
        $('#loginmodal').modal('hide');
        $('#registermodal').modal('show');
      });

    });
  }

  onClickSubmit(value: any) {
    // alert('hii');
    this.username = value.username;
    this.password = value.password;
    this.authenticate.validate(this.username, this.password).subscribe(r => {
      this.user = r;
      console.log(this.user);
      if (this.user) {
        localStorage.setItem('fullname', this.user.fullname);
        localStorage.setItem('username', this.user.username);
        // this.error = false;
        window.location.href = '../Home';
      } else {
        // this.error = true;
        this.errormsg = 'Invalid Username / Password';
      }
    });
  }


  signout() {
    // const auth2 = gapi.auth2.getAuthInstance();
    // auth2.signOut().then(() => {
    // });
    localStorage.removeItem('fullname');
    localStorage.removeItem('username');
    localStorage.removeItem('suml');
    localStorage.removeItem('sumr');
    localStorage.removeItem('konuadd');
    localStorage.removeItem('fname');

    window.location.href = '../Home';
  }

  registeruser() {
    this.user = {
      username: this.username,
      password: this.password,
      fullname: this.fullname,
      email: this.email,
      contact: this.mobile
    };
    if (this.user.password !== this.repassword) {
      this.errormsg = 'Password not matched';
    } else {
      // console.log(this.user);
      this.register.registerusers(this.user).subscribe(data => {
        if (data.message) {
          alert('Account created successfully');
          window.location.href = '../Home';
        } else {
          this.errormsg = 'Username exist.';
        }
      });
    }
  }
}
