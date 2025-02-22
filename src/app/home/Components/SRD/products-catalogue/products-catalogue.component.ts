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
  selector: 'app-products-catalogue',
  templateUrl: './products-catalogue.component.html',
  styleUrls: ['./products-catalogue.component.scss'],
})
export class ProductsCatalogueComponent {
  @ViewChild('cardsWrapper') cardsWrapper!: ElementRef;

  @Input() configParam: any;
  data: any;
  constructor(
    private router: Router,
    public config: ConfigurationService,
  ) {
    this.data = config.data.ProductsData;
  }
  next() {
    this.cardsWrapper.nativeElement.scrollLeft -= 300;
  }
  previous() {
    this.cardsWrapper.nativeElement.scrollLeft += 300;
  }
  openProductDetails(product: any) {
    this.config.config.headerConfiguration.showHeader = true;
    this.router.navigate([this.config.getCurrentLanguage(), 'Product-Details', product.id]);
  }
}
