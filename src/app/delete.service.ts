import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }

  deleteall(del){
    return this.http.delete("http://localhost:3019/api/deleteProductById/"+del.ProductId,del);
}
}
  