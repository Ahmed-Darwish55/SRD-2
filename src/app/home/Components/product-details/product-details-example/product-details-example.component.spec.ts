import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsExampleComponent } from './product-details-example.component';

describe('ProductDetailsExampleComponent', () => {
  let component: ProductDetailsExampleComponent;
  let fixture: ComponentFixture<ProductDetailsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
