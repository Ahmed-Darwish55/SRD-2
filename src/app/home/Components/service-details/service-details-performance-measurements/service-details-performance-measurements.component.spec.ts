import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsPerformanceMeasurementsComponent } from './service-details-performance-measurements.component';

describe('ServiceDetailsPerformanceMeasurementsComponent', () => {
  let component: ServiceDetailsPerformanceMeasurementsComponent;
  let fixture: ComponentFixture<ServiceDetailsPerformanceMeasurementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDetailsPerformanceMeasurementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDetailsPerformanceMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
