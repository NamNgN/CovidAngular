import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../../../app/model/weather.model';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  weatherData?: WeatherData
  cityName: string = 'Hanoi';

  ngOnInit(): void {

  }
}
