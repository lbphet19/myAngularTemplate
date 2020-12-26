import { Component, OnInit } from '@angular/core';
// declare var $:any;
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".test").click(function(){
      alert('htell');
    })

  }
  filter(name:string){
    // var content = "."+name;
    // $(".sortby-btn").html('Sort by ' +$(content).html()+'<i class="fas fa-caret-down caret-down-last"></i>');
    $(".sortby-span").text(name);
  }
  test(){
    console.log($(".test").text());
  }
    //  $(document).ready(function() {
	clickfunc(name:string){
		// var txt = $(obj).text();
		// $(".categories-display").text(txt);
    $(".categories-display").text(name);
	}
	// filter(class:string){
    // var content = $(obj).html();
    // console.log(content);
    // $(".sortby-btn").html('Sort by ' +content+'<i class="fas fa-caret-down caret-down-last"></i>');
    // console.log(class);
  }

// });

