import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { AgeCalComponent } from './age-cal/age-cal.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CovidWorldComponent } from './covid-world/covid-world.component';
import { CovidMapComponent } from './covid-map/covid-map.component';
import { CovidStatisticalComponent } from './covid-statistical/covid-statistical.component';
import { CovidCountryComponent } from './covid-country/covid-country.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'index',
    component: AppComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: 'age',
    component: AgeCalComponent
  },
  {
    path: 'world',
    component: CovidWorldComponent
  },
  {
    path: 'map',
    component: CovidMapComponent
  },
  {
    path: 'stat',
    component: CovidStatisticalComponent
  },
  {
    path: 'country',
    component: CovidCountryComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
