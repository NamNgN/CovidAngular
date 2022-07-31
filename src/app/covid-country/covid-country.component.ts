import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';
@Component({
  selector: 'app-covid-country',
  templateUrl: './covid-country.component.html',
  styleUrls: ['./covid-country.component.css']
})
export class CovidCountryComponent implements OnInit {
  countries: any;
  selectedOption: any;
  deaths = 0;
  confirmed = 0;
  reCover = 0;
  dataAll: any;
  fatality = '';
  code = '';

  constructor(private httpService: CovidService) { }

  ngOnInit(): void {
    this.httpService.getAll().subscribe((data: any) => {
      this.dataAll = data;

      data.forEach((element: any) => {
        if (element.countryregion == 'Afghanistan') {
          this.deaths += element.deaths;
          this.confirmed += element.confirmed;
          this.reCover += element.recovered;
          this.fatality = ((this.deaths * 100) / this.confirmed).toFixed(4);
        }
      });
      this.countries = [
        ...new Map(
          data.map((item: any) => [item['countryregion'], item])
        ).values(),
      ];
    });
  }

  getCountry() {
    this.deaths = 0;
    this.confirmed = 0;
    this.reCover = 0;


    this.dataAll.forEach((element: any) => {
      if (element.countryregion == this.selectedOption) {
        this.deaths += element.deaths;
        this.confirmed += element.confirmed;
        this.reCover += element.recovered;
        this.fatality = ((this.deaths * 100) / this.confirmed).toFixed(4);
        this.createMessageC(this.selectedOption)
        this.createMessage(element.countrycode.iso2)
      }

    });


  }
  createMessage(code: string) {
    this.httpService.changeMessage(code);
  }
  createMessageC(mess: string) {
    this.httpService.changeMessageC(mess)
  }
}

