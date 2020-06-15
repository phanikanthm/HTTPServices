import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weatherapi',
  templateUrl: './weatherapi.component.html',
  styleUrls: ['./weatherapi.component.css']
})
export class WeatherapiComponent implements OnInit {
weathers;
eat;
  constructor(private weather:WeatherService) { }

  ngOnInit() {
  }
  getapi(){
    // console.log("inside")
      this.weather.getall(this.eat).subscribe(
        (response) =>{
          
          this.weathers=response;

        }

      )

  }


}
