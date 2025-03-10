import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingPopupComponent } from './floating-popup.component';

describe('FloatingPopupComponent', () => {
  let component: FloatingPopupComponent;
  let fixture: ComponentFixture<FloatingPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingPopupComponent]
    });
    fixture = TestBed.createComponent(FloatingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
