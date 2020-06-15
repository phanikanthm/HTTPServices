import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private weatherapii:HttpClient) { }

  getall(humadity){
    return this.weatherapii.get("https://api.openweathermap.org/data/2.5/weather?q=London"+humadity);

//    return this.weatherapii.get("https://api.openweathermap.org/data/2.5/weather?lat=43.6558109&lon=-72.2449919&APPID=c470d9117220df245654821524d1b0c2"+city);
  }

  // https://samples.openweathermap.org/data/2.5/forecast/hourly?q=London,us&appid=b6907d289e10d714a6e88b30761fae22
}
 