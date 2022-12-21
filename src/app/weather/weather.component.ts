import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherService } from '../weather.service';


const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {


  date: Date = new Date();
  day: string = days[this.date.getDay()];
  location: string = "";
  countryCode: string = "TR";
  temp: number = 0;
  condition: string = ""
  precipitation :number = 0;
  humidity :number = 0;
  wind :number = 0;

  constructor(private weatherService:WeatherService){
  }

  ngOnInit(): void {

  }

  updateData(cityName : string) {
    this.weatherService.getWeather(cityName).subscribe((data: any)=> {
      console.log(data)
      this.condition = data.current.condition.text
      this.location = data.location.name
      this.temp = data.current.temp_c
      this.precipitation = data.current.precip_mm
      this.humidity = data.current.humidity
      this.wind = data.current.wind_kph
    });
  }
}


