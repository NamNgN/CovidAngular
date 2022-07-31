import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare const age: any;
declare const mod: any;
@Component({
  selector: 'app-age-cal',
  templateUrl: './age-cal.component.html',
  styleUrls: ['./age-cal.component.css']
})
export class AgeCalComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onclick() {
    age();
  }
   onchange() {
    mod();
  }
}
