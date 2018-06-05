import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { query } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:Product[]=[];
  filteredProducts:Product[]=[];
  category:string;
 

  constructor(
    route:ActivatedRoute,
    private productService:ProductService) {
    this.productService.getAll().subscribe(products=>this.filteredProducts=this.products=products);
   

    route.queryParamMap.subscribe(prams=>{
      this.category=prams.get('category');

     this.filteredProducts= (this.category)? 
     this.products.filter(p=>p.category===this.category ):this.products;

    });

    

   }

  

}
