import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDetailsWorkflowComponent } from './service-details-workflow.component';



@NgModule({
  declarations: [ServiceDetailsWorkflowComponent],
  imports: [
    CommonModule
  ], providers: [],
  bootstrap: [ServiceDetailsWorkflowComponent],
  exports: [
    ServiceDetailsWorkflowComponent
  ]
})
export class ServiceDetailsWorkflowModule { }
