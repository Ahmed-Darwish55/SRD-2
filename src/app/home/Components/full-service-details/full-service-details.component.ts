import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../Services/configuration.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-full-service-details',
  templateUrl: './full-service-details.component.html',
  styleUrls: ['./full-service-details.component.scss'],
})
export class FullServiceDetailsComponent implements OnInit {
  constructor(
    public configService: ConfigurationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params && params['id']) {
        const id = params['id'];
        const interval = setInterval(() => {
          if (this.configService?.data?.ProductsData?.products) {
            clearInterval(interval);
            this.loadserviceCatalogue(id);
          }
        }, 100); 
        // this.loadserviceCatalogue(id);
      }
    });
  }

  loadserviceCatalogue(serviceId: any) {
    let service: any = this.configService?.data?.ServiceData?.services?.find(
      (f: any) => f?.id == serviceId
    );
    this.configService.config.productAndService.subHeaderConfig.isProduct =
      false;
    this.configService.config.productAndService.subHeaderConfig.ownership =
      service.ownership;
    this.configService.config.productAndService.servicesDataConfig = service;
  }

  getObject(key: string): any {
    const jsonString = sessionStorage.getItem(key);
    return jsonString !== null ? JSON.parse(jsonString) : null;
  }

  scrollToSection(id: string) {
    this.router.navigate([this.configService.getCurrentLanguage()], {
      fragment: 'servicesCatalogue',
    });
  }
}
