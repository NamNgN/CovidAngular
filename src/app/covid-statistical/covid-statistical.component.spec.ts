import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidStatisticalComponent } from './covid-statistical.component';

describe('CovidStatisticalComponent', () => {
  let component: CovidStatisticalComponent;
  let fixture: ComponentFixture<CovidStatisticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CovidStatisticalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CovidStatisticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
