import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoSpatialAboutComponent } from './geo-spatial-about.component';

describe('GeoSpatialAboutComponent', () => {
  let component: GeoSpatialAboutComponent;
  let fixture: ComponentFixture<GeoSpatialAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeoSpatialAboutComponent]
    });
    fixture = TestBed.createComponent(GeoSpatialAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
