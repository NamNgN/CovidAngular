import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { Covid } from '../model/covid.model';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  private readonly BASE_URL = 'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest';

  constructor(private http: HttpClient) { }

  public ongetData(){
    return this.http.get<Covid[]>(`${this.BASE_URL}`);
  }

  static scaledRadius(val: number, maxVal: number): number {
    return 100 * (val / maxVal);
  }

}
