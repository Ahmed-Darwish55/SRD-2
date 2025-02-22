import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BIDashboardComponent } from './bi-dashboard.component';

describe('BIDashboardComponent', () => {
  let component: BIDashboardComponent;
  let fixture: ComponentFixture<BIDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BIDashboardComponent]
    });
    fixture = TestBed.createComponent(BIDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
