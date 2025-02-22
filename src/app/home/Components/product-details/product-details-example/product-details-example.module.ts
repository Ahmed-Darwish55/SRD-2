import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsExampleComponent } from './product-details-example.component';



@NgModule({
  declarations: [ProductDetailsExampleComponent],
  imports: [
    CommonModule
  ],providers: [],
  bootstrap: [ProductDetailsExampleComponent],
  exports:[
    ProductDetailsExampleComponent
  ]
})
export class ProductDetailsExampleModule { }
