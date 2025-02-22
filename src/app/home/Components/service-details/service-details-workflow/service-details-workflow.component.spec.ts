import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsWorkflowComponent } from './service-details-workflow.component';

describe('ServiceDetailsWorkflowComponent', () => {
  let component: ServiceDetailsWorkflowComponent;
  let fixture: ComponentFixture<ServiceDetailsWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDetailsWorkflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDetailsWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
