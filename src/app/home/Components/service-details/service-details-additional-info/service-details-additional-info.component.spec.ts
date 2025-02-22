import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsAdditionalInfoComponent } from './service-details-additional-info.component';

describe('ServiceDetailsAdditionalInfoComponent', () => {
  let component: ServiceDetailsAdditionalInfoComponent;
  let fixture: ComponentFixture<ServiceDetailsAdditionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDetailsAdditionalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDetailsAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
