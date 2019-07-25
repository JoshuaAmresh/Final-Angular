import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_KEY = '6560646f31f1946c8f2c5341262a021e';

const URL = 'https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string) {
    const endpoint = `${URL}/weather?q=${city}&appid=${API_KEY}`;
    return this.http.get(endpoint, httpOptions);
  }
}
