import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent {
 configg=environment.config;
 private SubHeaderConfiguration = `assets/Config/AR/SRD/sub-header.${this.configg}.json`;
config: any;
  titleOfProductAndService: any;
  @Input() configParam: any; // decorate the property with @Input()
  @Input() data: any; // decorate the property with @Input()
  @Output() backPressed: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(public configService: ConfigurationService) {
    this.configService
      .getJsonData(this.SubHeaderConfiguration)
      .subscribe((value: any) => {
     this.config = value;
      });
    this.configParam = this.configService;
  }

  onBackPressed() {
    this.backPressed.next(true);
  }
}
