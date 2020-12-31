import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOffersSectionComponent } from './special-offers-section.component';

describe('SpecialOffersSectionComponent', () => {
  let component: SpecialOffersSectionComponent;
  let fixture: ComponentFixture<SpecialOffersSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialOffersSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialOffersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
