import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampPitchesReservationComponent } from './camp-pitches-reservation.component';

describe('CampPitchesReservationComponent', () => {
  let component: CampPitchesReservationComponent;
  let fixture: ComponentFixture<CampPitchesReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampPitchesReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampPitchesReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
