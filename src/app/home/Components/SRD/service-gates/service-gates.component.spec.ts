import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGatesComponent } from './service-gates.component';

describe('ServiceGatesComponent', () => {
  let component: ServiceGatesComponent;
  let fixture: ComponentFixture<ServiceGatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceGatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceGatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
