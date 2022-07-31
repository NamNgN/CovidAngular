import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidWorldComponent } from './covid-world.component';

describe('CovidWorldComponent', () => {
  let component: CovidWorldComponent;
  let fixture: ComponentFixture<CovidWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CovidWorldComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CovidWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
