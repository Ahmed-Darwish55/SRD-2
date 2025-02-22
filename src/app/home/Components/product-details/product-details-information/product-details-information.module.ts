import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsInformationComponent } from './product-details-information.component';



@NgModule({
  declarations: [ProductDetailsInformationComponent],
  imports: [
    CommonModule
  ],providers: [],
  bootstrap: [ProductDetailsInformationComponent],
  exports:[
    ProductDetailsInformationComponent
  ]
})
export class ProductDetailsInformationModule { }
