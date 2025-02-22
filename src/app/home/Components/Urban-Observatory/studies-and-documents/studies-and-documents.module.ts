import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudiesAndDocumentsComponent } from './studies-and-documents.component';



@NgModule({
  declarations: [StudiesAndDocumentsComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [StudiesAndDocumentsComponent],
  exports: [
    StudiesAndDocumentsComponent
  ]
})
export class StudiesAndDocumentsModule { }
