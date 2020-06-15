import { Component, OnInit } from '@angular/core';
import { PutService } from '../put.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {

  constructor(private pt: PutService) { }

  ngOnInit() {
  } 
 
  put(f){
    console.log(f.value)
      this.pt.putall(f.value).subscribe(
        (response) => {
          console.log(response);  
        }
      )

  }

}
