import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
users;
  constructor(private http:HttpClient) {
    this.users=[
      {
     fullname:"phanikanth",
      lastname:"meruga",
      age:30,
      address:"vijayawada"
     },
    {
      fullname:"chandra",
      lastname:"kanth",
      age:40,
      address:"hyderabad"
    }
  ];
   }


   getUsers() {
     console.log("working")
    return this.users;
    
    // console.log(this.users);
   }
  }

  
