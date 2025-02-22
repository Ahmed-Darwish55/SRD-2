import { Component, Input } from '@angular/core';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';

@Component({
  selector: 'app-service-details-workflow',
  templateUrl: './service-details-workflow.component.html',
  styleUrls: ['./service-details-workflow.component.scss']
})
export class ServiceDetailsWorkflowComponent {
  @Input() config :any;
  @Input() data :any;
  constructor(public configService: ConfigurationService){

  }
}
