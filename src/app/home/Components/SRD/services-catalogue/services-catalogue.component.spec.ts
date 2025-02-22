import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCatalogueComponent } from './services-catalogue.component';

describe('ServicesCatalogueComponent', () => {
  let component: ServicesCatalogueComponent;
  let fixture: ComponentFixture<ServicesCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesCatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
