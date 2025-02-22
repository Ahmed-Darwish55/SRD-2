import { Component, Input } from '@angular/core';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';

@Component({
  selector: 'app-service-details-additional-info',
  templateUrl: './service-details-additional-info.component.html',
  styleUrls: ['./service-details-additional-info.component.scss'],
})
export class ServiceDetailsAdditionalInfoComponent {
  @Input() config: any;
  @Input() data: any;
  constructor(public configService: ConfigurationService) {}
}
