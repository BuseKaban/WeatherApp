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
  location: string = "İzmir";
  countryCode: string = "TR";
  temp: string = "18C";
  condition: string = "Sunny"
  precipitation :string = "12";
  humidity :string = "30";
  wind :string = "5";

  constructor(private weatherService:WeatherService){
  }

  ngOnInit(): void {
  }

  updateData() {
    this.weatherService.getWeather().subscribe((data: any)=> {
      console.log(data)
      this.condition = data.current.condition.text

    });
  }
}


