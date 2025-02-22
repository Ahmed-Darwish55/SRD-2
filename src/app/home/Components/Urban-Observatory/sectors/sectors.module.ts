import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectorsComponent } from './sectors.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SectorsComponent],
  imports: [CommonModule, NgbTooltipModule, NgbNavModule],
  providers: [],
  bootstrap: [SectorsComponent],
  exports: [SectorsComponent],
})
export class SectorsModule {}
