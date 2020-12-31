import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularOffersSectionComponent } from './popular-offers-section.component';

describe('PopularOffersSectionComponent', () => {
  let component: PopularOffersSectionComponent;
  let fixture: ComponentFixture<PopularOffersSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularOffersSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularOffersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
