import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';

@Component({
  selector: 'app-bi-dashboard',
  templateUrl: './bi-dashboard.component.html',
  styleUrls: ['./bi-dashboard.component.scss']
})
export class BIDashboardComponent {
  @Input() configParam: any;
  data: any;
  constructor(private sanitizer: DomSanitizer,config: ConfigurationService) {
    this.data = config.data.BIDashboardData;
    this.data.BIDashboard.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.BIDashboard.url);
  }
}
