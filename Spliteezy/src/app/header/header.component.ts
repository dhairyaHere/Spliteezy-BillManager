import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
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

}
