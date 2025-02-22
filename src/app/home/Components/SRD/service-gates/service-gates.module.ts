import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceGatesComponent } from './service-gates.component';



@NgModule({
  declarations: [ServiceGatesComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ServiceGatesComponent
  ]
})
export class ServiceGatesModule { }
