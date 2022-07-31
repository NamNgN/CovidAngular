import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataItem, Series } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { CovidService } from '../services/covid.service';
@Component({
  selector: 'app-covid-statistical',
  templateUrl: './covid-statistical.component.html',
  styleUrls: ['./covid-statistical.component.css']
})
export class CovidStatisticalComponent implements OnInit {
  multi: Array<Series> = [];
  view: [number, number] = [700, 500];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;
  roundDomains: boolean = true;
  colorScheme: Color = {
    domain: ['#5AA454', '#E44D25', 'blue'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Custom Usage',
  };

  array: Array<string> = [];
  idCountry = '';
  datas: any;
  obj: any;
  count = 0;
  death: Array<DataItem> = []
  confirm: Array<DataItem> = []
  reCover: Array<DataItem> = []





  constructor(private httpService: CovidService) { }

  reverseObject(object: any) {
    let newObject: any = {};
    let keys: any = [];

    for (var key in object) {
      keys.push(key);
    }
    let count = 0;
    for (var i = keys.length - 1; i >= 0; i--) {
      var value = object[keys[i]];
      newObject[keys[i]] = value;
      count++;
    }

    return newObject;
  }


  ngOnInit(): void {
    this.httpService.currentMessage.subscribe((message: string) => {
      this.idCountry = message;
      this.httpService.getCountry(this.idCountry).subscribe((i) => {
        this.datas = i
        console.log(this.datas[0].timeseries);
        this.obj = this.datas[0].timeseries
        let newObj = this.reverseObject(this.obj);

        for (const key in newObj) {
          if (this.count < 15) {
            this.death.unshift({ "name": key, "value": newObj[key].deaths })
            this.reCover.unshift({ "name": key, "value": newObj[key].recovered })
            this.confirm.unshift({ "name": key, "value": newObj[key].confirmed })
          }
          this.count++;
        }
        this.count = 0;
        this.multi = [{ "name": "death", "series": this.death }, { "name": "recovered", "series": this.reCover }, { "name": "confirmed", "series": this.confirm }]
        this.multi = [...this.multi];
        this.death = [];
        this.reCover = [];
        this.confirm = [];
      });
    });
  }



  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}

