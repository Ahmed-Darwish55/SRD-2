import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsInformationComponent } from './service-details-information.component';

describe('ServiceDetailsInformationComponent', () => {
  let component: ServiceDetailsInformationComponent;
  let fixture: ComponentFixture<ServiceDetailsInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDetailsInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDetailsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
