import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-corona-world',
  templateUrl: './covid-world.component.html',
  styleUrls: ['./covid-world.component.css']
})
export class CovidWorldComponent implements OnInit {
  wouldWide: any;
  fatalityRate: string = '';
  constructor(private httpService: CovidService) { }

  ngOnInit(): void {
    this.httpService.getDataWorldWide().subscribe((data: any) => {
      this.wouldWide = data;
      this.fatalityRate = (this.wouldWide.deaths * 100 / this.wouldWide.confirmed).toFixed(2);
    })


  }

  today = new Date();
  pipe = new DatePipe('en-US');

}
