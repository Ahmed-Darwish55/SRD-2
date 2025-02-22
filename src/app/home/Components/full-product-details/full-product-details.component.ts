import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../Services/configuration.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-full-product-details',
  templateUrl: './full-product-details.component.html',
  styleUrls: ['./full-product-details.component.scss'],
})
export class FullProductDetailsComponent implements OnInit {
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
            this.loadProductCatalogue(id);
          }
        }, 100); 
        // this.loadProductCatalogue(id);


        
      
      }
    });
  }

  loadProductCatalogue(productId: any) {
    let product: any = this.configService?.data?.ProductsData?.products?.find(
      (f: any) => f.id == productId
    );
    
    this.configService.config.productAndService.subHeaderConfig.isProduct =
      true;
    this.configService.config.productAndService.subHeaderConfig.ownership =
      product?.ownership;
    this.configService.config.productAndService.productsDataConfig = product;
  }

  getObject(key: string): any {
    const jsonString = sessionStorage.getItem(key);
    return jsonString !== null ? JSON.parse(jsonString) : null;
  }

  scrollToSection(id: string) {
    this.router.navigate([this.configService.getCurrentLanguage()], {
      fragment: 'productsCatalogue',
    });
  }
}
