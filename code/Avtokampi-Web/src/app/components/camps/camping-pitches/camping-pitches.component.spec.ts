import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingPitchesComponent } from './camping-pitches.component';

describe('CampingPitchesComponent', () => {
  let component: CampingPitchesComponent;
  let fixture: ComponentFixture<CampingPitchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampingPitchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampingPitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
