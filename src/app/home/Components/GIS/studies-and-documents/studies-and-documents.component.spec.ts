import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesAndDocumentsComponent } from './studies-and-documents.component';

describe('StudiesAndDocumentsComponent', () => {
  let component: StudiesAndDocumentsComponent;
  let fixture: ComponentFixture<StudiesAndDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesAndDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiesAndDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
