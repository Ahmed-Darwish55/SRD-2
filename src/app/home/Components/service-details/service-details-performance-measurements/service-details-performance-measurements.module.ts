import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDetailsPerformanceMeasurementsComponent } from './service-details-performance-measurements.component';



@NgModule({
  declarations: [ServiceDetailsPerformanceMeasurementsComponent],
  imports: [
    CommonModule
  ], providers: [],
  bootstrap: [ServiceDetailsPerformanceMeasurementsComponent],
  exports: [
    ServiceDetailsPerformanceMeasurementsComponent
  ]
})
export class ServiceDetailsPerformanceMeasurementsModule { }
