import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsCountersSectionComponent } from './facts-counters-section.component';

describe('FactsCountersSectionComponent', () => {
  let component: FactsCountersSectionComponent;
  let fixture: ComponentFixture<FactsCountersSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactsCountersSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactsCountersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
