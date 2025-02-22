import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsAdditionalInfoComponent } from './product-details-additional-info.component';

describe('ProductDetailsAdditionalInfoComponent', () => {
  let component: ProductDetailsAdditionalInfoComponent;
  let fixture: ComponentFixture<ProductDetailsAdditionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsAdditionalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
