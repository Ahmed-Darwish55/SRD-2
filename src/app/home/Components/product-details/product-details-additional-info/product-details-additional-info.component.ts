import { Component, Input } from '@angular/core';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';

@Component({
  selector: 'app-product-details-additional-info',
  templateUrl: './product-details-additional-info.component.html',
  styleUrls: ['./product-details-additional-info.component.scss'],
})
export class ProductDetailsAdditionalInfoComponent {
  @Input() config: any;
  @Input() data: any;
  constructor(public ConfigurationService: ConfigurationService) {}
}
