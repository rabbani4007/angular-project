import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  private WEATHER_API_KEY = 'e91467f380dc7008ed4490e13bebd0f2';

  constructor(private httpClient: HttpClient) {}

  public getWeatherByCity(city: string) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.WEATHER_API_KEY}`;
    return this.httpClient.get(url);
  }
  public getDummyWeather() {
    let url = `https://localhost:5001/WeatherForecast`;
    return this.httpClient.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
