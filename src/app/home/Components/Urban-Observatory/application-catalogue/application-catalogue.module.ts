import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationCatalogueComponent } from './application-catalogue.component';




@NgModule({
  declarations: [ApplicationCatalogueComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [ApplicationCatalogueComponent],
  exports: [
    ApplicationCatalogueComponent
  ]
})
export class ApplicationCatalogueModule { }
