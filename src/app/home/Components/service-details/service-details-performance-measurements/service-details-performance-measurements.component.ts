import { Component, Input } from '@angular/core';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';

@Component({
  selector: 'app-service-details-performance-measurements',
  templateUrl: './service-details-performance-measurements.component.html',
  styleUrls: ['./service-details-performance-measurements.component.scss'],
})
export class ServiceDetailsPerformanceMeasurementsComponent {
  @Input() config: any;
  @Input() data: any;
  constructor(public configService: ConfigurationService) {}
}
