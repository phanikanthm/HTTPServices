import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor( private productService:ProductService) { }
 
  ngOnInit() {
  }  

  addProduct(f){
    console.log(f.value)
    this.productService.addnewProduct(f.value).subscribe(

      (response) => {

        console.log(response);
      }
    )
  }

}

