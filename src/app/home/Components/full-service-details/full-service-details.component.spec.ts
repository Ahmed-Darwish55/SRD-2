import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullServiceDetailsComponent } from './full-service-details.component';

describe('FullServiceDetailsComponent', () => {
  let component: FullServiceDetailsComponent;
  let fixture: ComponentFixture<FullServiceDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullServiceDetailsComponent]
    });
    fixture = TestBed.createComponent(FullServiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
