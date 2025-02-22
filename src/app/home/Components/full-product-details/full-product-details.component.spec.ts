import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullProductDetailsComponent } from './full-product-details.component';

describe('FullProductDetailsComponent', () => {
  let component: FullProductDetailsComponent;
  let fixture: ComponentFixture<FullProductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullProductDetailsComponent],
    });
    fixture = TestBed.createComponent(FullProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
