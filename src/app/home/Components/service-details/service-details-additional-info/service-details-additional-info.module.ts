import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDetailsAdditionalInfoComponent } from './service-details-additional-info.component';



@NgModule({
  declarations: [ServiceDetailsAdditionalInfoComponent],
  imports: [
    CommonModule
  ], providers: [],
  bootstrap: [ServiceDetailsAdditionalInfoComponent],
  exports: [
    ServiceDetailsAdditionalInfoComponent
  ]
})
export class ServiceDetailsAdditionalInfoModule { }
