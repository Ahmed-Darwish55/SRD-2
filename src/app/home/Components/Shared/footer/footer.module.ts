import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule
  ],

  providers: [],
  bootstrap: [FooterComponent],
  exports:[
    FooterComponent
  ]
})
export class FooterModule { }
