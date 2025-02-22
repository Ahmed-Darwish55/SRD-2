import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesAndDocumentsComponent } from './studies-and-documents.component';

describe('StudiesAndDocumentsComponent', () => {
  let component: StudiesAndDocumentsComponent;
  let fixture: ComponentFixture<StudiesAndDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudiesAndDocumentsComponent]
    });
    fixture = TestBed.createComponent(StudiesAndDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
