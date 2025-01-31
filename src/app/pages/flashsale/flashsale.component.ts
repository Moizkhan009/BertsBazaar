import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import "animate.css";



@Component({
  selector: 'app-flashsale',
  imports: [NgFor],
  templateUrl: './flashsale.component.html',
  styleUrl: './flashsale.component.css'
})
export class FlashsaleComponent {


  allproducts:any;


  constructor(public http:HttpClient){}

  ngOnInit(){

    this.http.get("https://dummyjson.com/products").subscribe((data)=>{

    let{products}:any=data

    this.allproducts = products

  })
  }


}
