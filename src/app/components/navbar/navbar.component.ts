import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

// products:any;

// constructor(public http:HttpClient){}

// GetProducts(input:any){
//   console.log("working")
//   console.log(input.value)


//   this.http.get(`https://dummyjson.com/products/search?q=${input.value}`).subscribe((data:any)=>{
// this.products = data.products
//   })
// }

}
