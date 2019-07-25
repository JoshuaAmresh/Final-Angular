import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weatherdemo',
  templateUrl: './weatherdemo.component.html',
  styleUrls: ['./weatherdemo.component.css']
})
export class WeatherdemoComponent implements OnInit {

  weatherData;
  city: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.city = '';
    this.weatherData = null;
  }

  getWeatherData(){
    this.weatherService.getCurrentWeather(this.city)
      .subscribe(
        data=>{
          const data2 = JSON.parse(JSON.stringify(data));
          this.weatherData={
          curr_temp:data2.main.temp-273,
          max_temp:data2.main.temp_max-273,
          min_temp:data2.main.temp_min-273,
          humidity: data2.main.humidity
          }
          console.log(data);
        }
      );
  }
}
