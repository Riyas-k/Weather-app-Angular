import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weatherMode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  weatherData?:WeatherData
  constructor (private weatherService:WeatherService){}
  ngOnInit(): void {
      this.weatherService.getWeatherData('ernakulam').subscribe({
        next:(data)=>{
          console.log(data);
          this.weatherData = data;
        }
      })
  }
}
