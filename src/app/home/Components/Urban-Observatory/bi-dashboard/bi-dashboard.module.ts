import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BIDashboardComponent } from './bi-dashboard.component';



@NgModule({
  declarations: [BIDashboardComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [BIDashboardComponent],
  exports: [
    BIDashboardComponent
  ]
})
export class BIDashboardModule { }
