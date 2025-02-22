import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDetailsInformationComponent } from './service-details-information.component';



@NgModule({
  declarations: [ServiceDetailsInformationComponent],
  imports: [
    CommonModule
  ], providers: [],
  bootstrap: [ServiceDetailsInformationComponent],
  exports: [
    ServiceDetailsInformationComponent
  ]
})
export class ServiceDetailsInformationModule { }
