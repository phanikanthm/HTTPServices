import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

   constructor(private httpClient: HttpClient) { 
 
  }
 
  getposts(){
    return  this.httpClient.get("https://jsonplaceholder.typicode.com/posts");       
  }

}
  