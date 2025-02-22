import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeComponent } from './home.component';

import { FooterModule } from './Components/Shared/footer/footer.module';
import { HeaderModule } from './Components/Shared/header/header.module';
import { VideoIntroLoadingModule } from './Components/Shared/video-intro-loading/video-intro-loading.module';

import { ServiceGatesModule } from './Components/SRD/service-gates/service-gates.module';
import { AboutComponent } from './Components/SRD/about/about.component';
import { PartnersComponent } from './Components/SRD/partners/partners.component';
import { ProductsCatalogueComponent } from './Components/SRD/products-catalogue/products-catalogue.component';
import { ServicesCatalogueComponent } from './Components/SRD/services-catalogue/services-catalogue.component';
import { SliderComponent } from './Components/SRD/slider/slider.component';
import { GeoSpatialAboutComponent } from './Components/GIS/geo-spatial-about/geo-spatial-about.component';

import { ApplicationCatalogueComponent } from './Components/GIS/application-catalogue/application-catalogue.component';
import { StudiesAndDocumentsComponent } from './Components/GIS/studies-and-documents/studies-and-documents.component';
import { DataCatalogueModule } from './Components/GIS/data-catalogue/data-catalogue.module';

import { SectorsModule } from './Components/Urban-Observatory/sectors/sectors.module';
import { ProductDetailsAdditionalInfoModule } from './Components/product-details/product-details-additional-info/product-details-additional-info.module';
import { ProductDetailsExampleModule } from './Components/product-details/product-details-example/product-details-example.module';
import { ProductDetailsInformationModule } from './Components/product-details/product-details-information/product-details-information.module';
import { ServiceDetailsAdditionalInfoModule } from './Components/service-details/service-details-additional-info/service-details-additional-info.module';
import { ServiceDetailsInformationModule } from './Components/service-details/service-details-information/service-details-information.module';
import { ServiceDetailsPerformanceMeasurementsModule } from './Components/service-details/service-details-performance-measurements/service-details-performance-measurements.module';
import { ServiceDetailsWorkflowModule } from './Components/service-details/service-details-workflow/service-details-workflow.module';
import { SubHeaderModule } from './Components/Shared/sub-header/sub-header.module';
import { FullProductDetailsComponent } from './Components/full-product-details/full-product-details.component';
import { FullServiceDetailsComponent } from './Components/full-service-details/full-service-details.component';
import { AccessabilitySvgComponent } from './Components/GIS/accessability-svg/accessability-svg.component';
import { LottieModule } from 'ngx-lottie';
// import { LottieTestingComponent} from './lottie-testing/lottie-testing.component'
import player from 'lottie-web';

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    AboutComponent,
    ProductsCatalogueComponent,
    ServicesCatalogueComponent,
    PartnersComponent,
    GeoSpatialAboutComponent,
    ApplicationCatalogueComponent,
    StudiesAndDocumentsComponent,
    FullProductDetailsComponent,
    FullServiceDetailsComponent,
    AccessabilitySvgComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbCarouselModule,
    LottieModule.forRoot({ player: playerFactory }),
    CarouselModule,
    FormsModule,
    BrowserAnimationsModule,
    NgIf,

    HeaderModule,
    FooterModule,
    VideoIntroLoadingModule,
    ServiceGatesModule,

    DataCatalogueModule,
    SectorsModule,
    SubHeaderModule,
    ProductDetailsInformationModule,
    ProductDetailsAdditionalInfoModule,
    ProductDetailsExampleModule,
    ServiceDetailsInformationModule,
    ServiceDetailsAdditionalInfoModule,
    ServiceDetailsWorkflowModule,
    ServiceDetailsPerformanceMeasurementsModule,
  ],

  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
