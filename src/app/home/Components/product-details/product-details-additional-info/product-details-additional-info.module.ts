import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsAdditionalInfoComponent } from './product-details-additional-info.component';



@NgModule({
  declarations: [ProductDetailsAdditionalInfoComponent],
  imports: [
    CommonModule
  ],providers: [],
  bootstrap: [ProductDetailsAdditionalInfoComponent],
  exports:[
    ProductDetailsAdditionalInfoComponent
  ]
})
export class ProductDetailsAdditionalInfoModule { }
