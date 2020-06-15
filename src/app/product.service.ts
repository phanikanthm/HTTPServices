import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private httpClient: HttpClient) { }
 

   addnewProduct(product){
    return this.httpClient.post("http://localhost:3019/api/addProduct",product);

   }



}
  