import { Component, Input } from '@angular/core';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';

@Component({
  selector: 'app-product-details-example',
  templateUrl: './product-details-example.component.html',
  styleUrls: ['./product-details-example.component.scss'],
})
export class ProductDetailsExampleComponent {
  @Input() config: any;
  @Input() data: any;
  constructor(public configService: ConfigurationService) {}
}
