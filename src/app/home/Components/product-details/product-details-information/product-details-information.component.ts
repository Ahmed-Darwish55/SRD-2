import { Component, Input } from '@angular/core';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';

@Component({
  selector: 'app-product-details-information',
  templateUrl: './product-details-information.component.html',
  styleUrls: ['./product-details-information.component.scss'],
})
export class ProductDetailsInformationComponent {
  @Input() config: any;
  @Input() data: any;
  constructor(public configService: ConfigurationService) {}
}
