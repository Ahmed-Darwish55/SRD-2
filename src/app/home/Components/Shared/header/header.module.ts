import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],providers: [],
  bootstrap: [HeaderComponent],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule {

 }
