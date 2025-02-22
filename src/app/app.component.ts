import { Component } from '@angular/core';
import { ConfigurationService } from './home/Services/configuration.service';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'منصة المعلومات الحضرية بالمنطقة الشرقية "سرد"';
  currentLanguage: string = 'ar';
  configService: ConfigurationService;
  screen: boolean = false;
  constructor(
    private route: ActivatedRoute,
    public config: ConfigurationService,
    private router: Router
  ) {
    this.configService = config;
    this.currentLanguage = document
      .querySelector('html')
      ?.getAttribute('lang') as string;
    config.changeLanguage(this.currentLanguage);
  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof RoutesRecognized) {
        const params = val?.state.root.firstChild?.params;
        if (params && params['lang']) {
          this.currentLanguage = params['lang'] as string;
          this.configService.changeLanguage(this.currentLanguage);
        }
        this.config.loadAllData();
        this.config.loadConfigurations();
        // this.config.checkUserAccess();
      
      }
    });
    if (window.devicePixelRatio >= 1.5) {
      this.screen = true;
    } else {
      this.screen = false;
    }
    // console.log('devicePixelRatio:' + window.devicePixelRatio);
    // console.log(this.screen);
  }
}
