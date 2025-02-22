import { Component } from '@angular/core';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';

@Component({
  selector: 'app-floating-popup',
  templateUrl: './floating-popup.component.html',
  styleUrls: ['./floating-popup.component.scss'],
})
export class FloatingPopupComponent {
  data: any;
  constructor(public ConfigurationService: ConfigurationService) {
    this.data = ConfigurationService.data.popupTemplate.popupTemplate;
  }
}
