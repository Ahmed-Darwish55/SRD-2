import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';
@Component({
  selector: 'app-services-catalogue',
  templateUrl: './services-catalogue.component.html',
  styleUrls: ['./services-catalogue.component.scss'],
})
export class ServicesCatalogueComponent {
  @Input() configParam: any;
  data: any;
  constructor(private router: Router, public config: ConfigurationService) {
    this.data = config.data.ServiceData;
  }

  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  next() {
    this.carouselContainer.nativeElement.scrollLeft -= 300;
  }
  previous() {
    this.carouselContainer.nativeElement.scrollLeft += 300;
  }

  openServiceDetails(service: any) {
    this.config.config.headerConfiguration.showHeader = true;
    this.router.navigate([
      this.config.getCurrentLanguage(),
      'Service-Details',
      service.id,
    ]);
  }
}
