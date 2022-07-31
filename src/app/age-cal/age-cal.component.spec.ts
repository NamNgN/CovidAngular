import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeCalComponent } from './age-cal.component';

describe('AgeCalComponent', () => {
  let component: AgeCalComponent;
  let fixture: ComponentFixture<AgeCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeCalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
