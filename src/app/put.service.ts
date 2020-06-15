import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PutService {

  constructor(private http:HttpClient) { }


  putall(putt){
    return this.http.put("http://localhost:3019/api/editProductById/"+putt.productId,putt);
  }

  

}
 