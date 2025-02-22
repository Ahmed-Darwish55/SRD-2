import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationCatalogueComponent } from './application-catalogue.component';

describe('ApplicationCatalogueComponent', () => {
  let component: ApplicationCatalogueComponent;
  let fixture: ComponentFixture<ApplicationCatalogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationCatalogueComponent]
    });
    fixture = TestBed.createComponent(ApplicationCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
