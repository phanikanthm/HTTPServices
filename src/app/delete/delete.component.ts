import { Component, OnInit } from '@angular/core';
import { DeleteService } from '../delete.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private del:DeleteService) { }

  ngOnInit() {
  }


  delete(f){
      console.log(f.value)
    this.del.deleteall(f.value).subscribe(
      (response) =>{
        console.log(response)
      }
    )

  }
}
