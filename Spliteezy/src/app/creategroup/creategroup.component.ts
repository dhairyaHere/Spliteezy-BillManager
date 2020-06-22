import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css']
})
export class CreategroupComponent implements OnInit {

  constructor() { }

  


  ngOnInit() {
  }
  addinfo(){
    // alert($("#holder input").length);
      $(".showhit").show();
      let i=0;
      let count = $("#holder input").length;
      let requested = parseInt($("#myid").val(), 10);
      // alert($("#myid").val());
      if (requested > count) {
          for (i = count; i < requested; i++) {
             
             let $outer = $('<div/>').attr({class:'form-group row',id:'outer'+i});
              $("#holder").append($outer);

              let $label = $('<label style="font-family: Georgia, \'Times New Roman\', Times, serif; font-size: 18px;"><b>Name</b></label>').attr({for:'text'+i,class:'col-4 col-form-label',value:'Name'});
              $('#outer'+i).append($label);

              let $innerdiv = $('<div/>').attr({id:'innerdiv'+i,class:'col-8'});
              $('#outer'+i).append($innerdiv);

              let $tb = $('<input/>').attr({id:'p'+i ,name:'p'+i ,placeholder:'Name of the member '+(i+1) ,type:'text' ,class:'form-control', required:'required'});
              $('#innerdiv'+i).append($tb);

             
              // var $ctrl = $('<input/>').attr({
              //     type: 'text',
              //     name: 'text' + i,
              //     value: 'text'
              // });
              // $("#holder").append($ctrl);
          }
      } else if (requested < count) {
          let x = requested - 1;
          $("#holder input:gt(" + x + ")").remove();
          $("#holder label:gt(" + x + ")").remove();
      }
  

  }
}
