import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flashsale',
  imports: [NgFor],
  templateUrl: './flashsale.component.html',
  styleUrl: './flashsale.component.css'
})
export class FlashsaleComponent {


  allproducts:any;


  constructor(private http:HttpClient){}

  ngOnInit(){

    console.log("this fuction is working")
    this.http.get("https://dummyjson.com/products").subscribe((data)=>{

    let{products}:any=data

    this.allproducts = products

  })
  }


}
