import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-products',
  imports: [NgFor],
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {

  allproducts: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("https://fakestoreapi.com/products").subscribe((data) => {
      this.allproducts = data;
    }, (error) => {
      console.error("Error fetching products", error);
    });
  }
}
