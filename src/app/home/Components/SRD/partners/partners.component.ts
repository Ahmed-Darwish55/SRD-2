import { Component, Input } from '@angular/core';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  @Input() configParam: any;
  data:any;
  constructor(config: ConfigurationService) {
    this.data = config.data.PartnersData;
  }
}
