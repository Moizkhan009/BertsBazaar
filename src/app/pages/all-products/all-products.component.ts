import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-products',
  imports: [NgFor],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {


  allproducts:any;
  
  
    constructor(private http:HttpClient){}
  
    ngOnInit(){
  
      this.http.get("https://dummyjson.com/products").subscribe((data)=>{
  
      let{products}:any=data
  
      this.allproducts = products
  
    })
    }

}
