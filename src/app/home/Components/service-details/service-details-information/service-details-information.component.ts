import { Component, Input } from '@angular/core';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';

@Component({
  selector: 'app-service-details-information',
  templateUrl: './service-details-information.component.html',
  styleUrls: ['./service-details-information.component.scss'],
})
export class ServiceDetailsInformationComponent {
  @Input() config: any;
  @Input() data: any;
  constructor(public configService: ConfigurationService) {}
}
