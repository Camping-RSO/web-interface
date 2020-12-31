import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedDestinationSectionComponent } from './featured-destination-section.component';

describe('FeaturedDestinationSectionComponent', () => {
  let component: FeaturedDestinationSectionComponent;
  let fixture: ComponentFixture<FeaturedDestinationSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedDestinationSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedDestinationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
