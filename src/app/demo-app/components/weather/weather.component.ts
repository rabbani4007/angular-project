import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherApiService } from '../../../services/weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  constructor(private weatherApiService: WeatherApiService) {}
  city: string = 'Jamadoba';
  currentDate = new Date();
  weatherData: any;

  ngOnInit(): void {}

  getWeatherByCity(city: string) {
    this.weatherApiService.getWeatherByCity(city).subscribe((response: any) => {
      this.weatherData = response;
      console.log(this.weatherData);
    });
    //this.getDummyWeather();
  }
  getLocalCustmDateTime(rowDate: any) {
    return new Date(rowDate * 1000).toLocaleTimeString('en-IN');
  }
  getDummyWeather() {
    this.weatherApiService.getDummyWeather().subscribe((response: any) => {
      console.log(response);
    });
  }
}
