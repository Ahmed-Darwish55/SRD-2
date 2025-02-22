import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataCatalogueComponent } from './data-catalogue.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FusionChartsModule } from 'angular-fusioncharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import * as FusionWidgets from 'fusioncharts/fusioncharts.widgets';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme,FusionWidgets)

@NgModule({
  declarations: [DataCatalogueComponent],
  imports: [
    CommonModule,
    NgbTooltipModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [DataCatalogueComponent],
  exports: [
    DataCatalogueComponent
  ]
})
export class DataCatalogueModule { }
