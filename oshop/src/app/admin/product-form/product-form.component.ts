import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product={};
  
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private categoryService:CategoryService,
    private productService:ProductService) {
    this.categories$=categoryService.getcategories();

    let id=this.route.snapshot.paramMap.get('id');
    if(id) this.productService.getProduct(id).subscribe(p=>this.product=p);
   }

  ngOnInit() {
  }

  save(product)
  {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }
}
