import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { AgeCalComponent } from './age-cal/age-cal.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }  from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CovidWorldComponent } from './covid-world/covid-world.component';
import { CovidMapComponent } from './covid-map/covid-map.component';
import { CovidStatisticalComponent } from './covid-statistical/covid-statistical.component';
import { CovidCountryComponent } from './covid-country/covid-country.component';
import { CovidService } from '../app/services/covid.service';
import { MarkerService } from '../app/services/marker.service';
import { ScaleLinear, ScalePoint, ScaleTime } from 'd3-scale'

  
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    AgeCalComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CovidWorldComponent,
    CovidMapComponent,
    CovidStatisticalComponent,
    CovidCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
  MarkerService,
  CovidService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }