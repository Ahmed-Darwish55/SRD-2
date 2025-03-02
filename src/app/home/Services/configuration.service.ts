import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { defer, from, Observable } from 'rxjs';
import Query from '@arcgis/core/rest/support/Query.js';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer.js';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {

  lang = new BehaviorSubject('en');
  isUserCanAccessPortal: boolean = false;
  userCantAccessPage: string = '';
  private currentLanguage: string = 'ar';
  private MainConfiguration = `assets/Config/main.${environment.config}.json`;
  private ApplicationCatalogueData = `assets/Data/applicationCatalogue.${environment.config}.json`;
  private DataCatalogueData = `assets/Data/dataCatalogue.${environment.config}.json`;
  private AboutData = `assets/Data/geoSpatialAbout.${environment.config}.json`;
  private PartnersData = `assets/Data/partners.${environment.config}.json`;
  private ProductsData = `assets/Data/productsCatalogue.${environment.config}.json`;
  private ServiceData = `assets/Data/servicesCatalogue.${environment.config}.json`;
  private BIDashboardData = `assets/Data/BI-Dashboard.${environment.config}.json`;
  private SectorsData = `assets/Data/sectors.${environment.config}.json`;
  private StudiesAndDocumentsData = `assets/Data/studiesAndDocuments.${environment.config}.json`;
  private popupTemplateData = `assets/Data/popup.${environment.config}.json`;
  private ApplicationCatalogueData_URL = `assets/Data/applicationCatalogue.${environment.config}.json`;
  private DataCatalogueData_URL = `assets/Data/dataCatalogue.${environment.config}.json`;
  private AboutData_URL = `assets/Data/geoSpatialAbout.${environment.config}.json`;
  private PartnersData_URL = `assets/Data/partners.${environment.config}.json`;
  private ProductsData_URL = `assets/Data/productsCatalogue.${environment.config}.json`;
  private ServiceData_URL = `assets/Data/servicesCatalogue.${environment.config}.json`;
  private BIDashboardData_URL = `assets/Data/BI-Dashboard.${environment.config}.json`;
  private SectorsData_URL = `assets/Data/sectors.${environment.config}.json`;
  private StudiesAndDocumentsData_URL = `assets/Data/studiesAndDocuments.${environment.config}.json`;
  private popupData_URL = `assets/Data/popup.${environment.config}.json`;
  data: any = {
    ApplicationCatalogueData: {},
    DataCatalogueData: {},
    AboutData: {},
    PartnersData: {},
    ProductsData: {},
    ServiceData: {},
    BIDashboardData: {},
    SectorsData: {},
    StudiesAndDocumentsData: {},
    popupTemplateData: {},
  };

  private HeaderConfiguration_AR_URL = `assets/Config/AR/main-header.${environment.config}.json`;
  private HeaderConfiguration_EN_URL = `assets/Config/EN/main-header.${environment.config}.json`;

  private SliderConfiguration_AR_URL = `assets/Config/AR/SRD/slider.${environment.config}.json`;
  private SliderConfiguration_EN_URL = `assets/Config/EN/SRD/slider.${environment.config}.json`;

  private About_SRD_Configuration_AR_URL = `assets/Config/AR/SRD/about.${environment.config}.json`;
  private About_SRD_Configuration_EN_URL = `assets/Config/EN/SRD/about.${environment.config}.json`;

  private ProductsConfiguration_AR_URL = `assets/Config/AR/SRD/productsCatalogue.${environment.config}.json`;
  private ProductsConfiguration_EN_URL = `assets/Config/EN/SRD/productsCatalogue.${environment.config}.json`;

  private ServicesConfiguration_AR_URL = `assets/Config/AR/SRD/servicesCatalogue.${environment.config}.json`;
  private ServicesConfiguration_EN_URL = `assets/Config/EN/SRD/servicesCatalogue.${environment.config}.json`;

  private GatesConfiguration_AR_URL = `assets/Config/AR/SRD/serviceGates.${environment.config}.json`;
  private GatesConfiguration_EN_URL = `assets/Config/EN/SRD/serviceGates.${environment.config}.json`;

  private GeoSpatialAboutConfiguration_AR_URL = `assets/Config/AR/GIS/about.${environment.config}.json`;
  private GeoSpatialAboutConfiguration_EN_URL = `assets/Config/EN/GIS/about.${environment.config}.json`;

  private DataCatalogueConfiguration_AR_URL = `assets/Config/AR/GIS/dataCatalogue.${environment.config}.json`;
  private DataCatalogueConfiguration_EN_URL = `assets/Config/EN/GIS/dataCatalogue.${environment.config}.json`;

  private ApplicationCatalogueConfiguration_AR_URL = `assets/Config/AR/GIS/applicationCatalogue.${environment.config}.json`;
  private ApplicationCatalogueConfiguration_EN_URL = `assets/Config/EN/GIS/applicationCatalogue.${environment.config}.json`;

  private StudiesAndDocumentsConfiguration_AR_URL = `assets/Config/AR/GIS/studiesAndDocuments.${environment.config}.json`;
  private StudiesAndDocumentsConfiguration_EN_URL = `assets/Config/EN/GIS/studiesAndDocuments.${environment.config}.json`;

  private PartnersConfiguration_AR_URL = `assets/Config/AR/SRD/partners.${environment.config}.json`;
  private PartnersConfiguration_EN_URL = `assets/Config/EN/SRD/partners.${environment.config}.json`;

  private FooterConfiguration_AR_URL = `assets/Config/AR/SRD/footer.${environment.config}.json`;
  private FooterConfiguration_EN_URL = `assets/Config/EN/SRD/footer.${environment.config}.json`;

  private SectorsConfiguration_AR_URL = `assets/Config/AR/Urban-Observatory/sectors.${environment.config}.json`;
  private SectorsConfiguration_EN_URL = `assets/Config/EN/Urban-Observatory/sectors.${environment.config}.json`;

  config: any = {
    isHidden: false,
    headerConfiguration: null,
    mainConfiguration: {},
    footerConfiguration: {},
    srd: {
      about: null,
      partners: null,
      slider: null,
      products: null,
      services: null,
      gates: null,
    },
    geoSpatial: {
      about: null,
      dataCatalogue: null,
      applicationCatalogue: null,
      studiesAndDocuments: null,
    },
    urbanObservatory: {
      sectors: null,
    },
    productAndService: {
      productsDataConfig: null,
      servicesDataConfig: null,
      subHeaderConfig: {
        isProduct: true,
        ownership: '',
      },
    },
    lang: 'ar',
    isCurrentLanguageArabic: true,
  };

  constructor(private http: HttpClient) {
   this.checkUserAccess()
    this.getJsonData(this.ApplicationCatalogueData).subscribe((value: any) => {
      this.data.ApplicationCatalogueData = value;
    });
    this.getJsonData(this.DataCatalogueData).subscribe((value: any) => {
      this.data.DataCatalogueData = value;
    });
    this.getJsonData(this.AboutData).subscribe((value: any) => {
      this.data.AboutData = value;
    });
    this.getJsonData(this.PartnersData).subscribe((value: any) => {
      this.data.PartnersData = value;
    });
    this.getJsonData(this.ProductsData).subscribe((value: any) => {
      this.data.ProductsData = value;
    });
    this.getJsonData(this.ServiceData).subscribe((value: any) => {
      this.data.ServiceData = value;
    });
    this.getJsonData(this.BIDashboardData).subscribe((value: any) => {
      this.data.BIDashboardData = value;
    });
    this.getJsonData(this.SectorsData).subscribe((value: any) => {
      this.data.SectorsData = value;
    });
    this.getJsonData(this.StudiesAndDocumentsData).subscribe((value: any) => {
      this.data.StudiesAndDocumentsData = value;
    });
    this.getJsonData(this.popupTemplateData).subscribe((value: any) => {
      this.data.popupTemplateData = value;
    });
  }
  getFiles(folderUrl: string): Observable<File[]> {
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');

    return this.http.get<File[]>(folderUrl, {
      headers: header,
    });
  }

  getJsonData(_url: string): Observable<any> {
    return this.http.get(_url);
  }

  checkUserCanAccessPortal(url: string): Observable<boolean> {

    return this.checkIfUrlExists(url).pipe(
      map((exists) => {
        this.isUserCanAccessPortal = exists;
        return this.isUserCanAccessPortal;
      })
    );
  }
  private checkIfUrlExists(url: string): Observable<boolean> {
    return this.http.head(url, { observe: 'response' }).pipe(
      map((response) => response.status >= 200 && response.status < 400),
      catchError((error: HttpErrorResponse) => {
        console.warn(`URL check failed: ${url}`, error.message);
        return of(false);
      })
    );
  }

  changeLanguage(_lang: string) {
    this.currentLanguage = _lang;
    document.documentElement.lang = this.currentLanguage;
    // if (this.currentLanguage === 'ar') {
    //   document.documentElement.dir = 'rtl';
    // } else {
    //   document.documentElement.dir = 'ltr';
    // }
  }
  getCurrentLanguage(): string {
    // console.log("currentLanguage = ", this.currentLanguage);
    return this.currentLanguage;
  }
  isCurrentLanguageArabic(): boolean {
    return this.currentLanguage == 'ar' ? true : false;
  }

  checkUserAccess() {
    this.getJsonData(this.MainConfiguration).subscribe((mainConfig: any) => {
      if (mainConfig.enableCheckIfUserHasPortalAccess) {
        this.checkUserCanAccessPortal(mainConfig.portalURL).subscribe(
          (value: any) => {
            this.isUserCanAccessPortal = value;
            this.userCantAccessPage = mainConfig.redirectPageIfNotAccess;
          }
        );
      } else {
        this.isUserCanAccessPortal =
          !mainConfig.enableCheckIfUserHasPortalAccess;
      }
    });
  }

  loadConfigurations() {
    this.getJsonData(this.MainConfiguration).subscribe((value: any) => {
      this.userCantAccessPage = value.redirectPageIfNotAccess;
      this.config.mainConfiguration = value;
    });
    this.config.lang = this.getCurrentLanguage();

    this.config.isCurrentLanguageArabic = this.isCurrentLanguageArabic();

    if (this.config.isCurrentLanguageArabic) {
      // SRD Configurations
      this.getJsonData(this.HeaderConfiguration_AR_URL).subscribe(
        (value: any) => {
          this.config.headerConfiguration = value;
        }
      );
      this.getJsonData(this.FooterConfiguration_AR_URL).subscribe(
        (value: any) => {
          this.config.footerConfiguration = value;
        }
      );

      this.getJsonData(this.About_SRD_Configuration_AR_URL).subscribe(
        (value: any) => {
          this.config.srd.about = value;
        }
      );
      this.getJsonData(this.PartnersConfiguration_AR_URL).subscribe(
        (value: any) => {
          this.config.srd.partners = value;
        }
      );
      this.getJsonData(this.SliderConfiguration_AR_URL).subscribe(
        (value: any) => {
          this.config.srd.slider = value;
        }
      );
      this.getJsonData(this.ProductsConfiguration_AR_URL).subscribe(
        (value: any) => {
          this.config.srd.products = value;
        }
      );
      this.getJsonData(this.ServicesConfiguration_AR_URL).subscribe(
        (value: any) => {
          this.config.srd.services = value;
        }
      );
      this.getJsonData(this.GatesConfiguration_AR_URL).subscribe(
        (value: any) => {
          this.config.srd.gates = value;
        }
      );

      // GIS Configurations
      this.getJsonData(this.GeoSpatialAboutConfiguration_AR_URL).subscribe(
        (value: any) => {
          this.config.geoSpatial.about = value;
        }
      );
      this.getJsonData(this.DataCatalogueConfiguration_AR_URL).subscribe(
        (value: any) => {
          this.config.geoSpatial.dataCatalogue = value;
        }
      );
      this.getJsonData(this.ApplicationCatalogueConfiguration_AR_URL).subscribe(
        (value: any) => {
          this.config.geoSpatial.applicationCatalogue = value;
        }
      );
      this.getJsonData(this.StudiesAndDocumentsConfiguration_AR_URL).subscribe(
        (value: any) => {
          this.config.geoSpatial.studiesAndDocuments = value;
        }
      );

      // Urban Observatory
      this.getJsonData(this.SectorsConfiguration_AR_URL).subscribe(
        (value: any) => {
          this.config.urbanObservatory.sectors = value;
        }
      );

      // this.config.aboutConfiguration = AboutConfiguration_AR;
      // this.config.dataCatalogueConfiguration = DataCatalogueConfiguration_AR;
      // this.config.applicationCatalogue = ApplicationCatalogueConfiguration_AR;
      // this.config.studiesAndDocumentsConfiguration = StudiesAndDocumentsConfiguration_AR;
      // this.config.bannerVideoConfiguration = BannerVideoConfiguration_AR;
    } else {
      // SRD Configurations
      this.getJsonData(this.HeaderConfiguration_EN_URL).subscribe(
        (value: any) => {
          this.config.headerConfiguration = value;
        }
      );
      this.getJsonData(this.FooterConfiguration_EN_URL).subscribe(
        (value: any) => {
          this.config.footerConfiguration = value;
        }
      );

      this.getJsonData(this.About_SRD_Configuration_EN_URL).subscribe(
        (value: any) => {
          this.config.srd.about = value;
        }
      );
      this.getJsonData(this.PartnersConfiguration_EN_URL).subscribe(
        (value: any) => {
          this.config.srd.partners = value;
        }
      );
      this.getJsonData(this.SliderConfiguration_EN_URL).subscribe(
        (value: any) => {
          this.config.srd.slider = value;
        }
      );
      this.getJsonData(this.ProductsConfiguration_EN_URL).subscribe(
        (value: any) => {
          this.config.srd.products = value;
        }
      );
      this.getJsonData(this.ServicesConfiguration_EN_URL).subscribe(
        (value: any) => {
          this.config.srd.services = value;
        }
      );
      this.getJsonData(this.GatesConfiguration_EN_URL).subscribe(
        (value: any) => {
          this.config.srd.gates = value;
        }
      );

      // GIS Configurations
      this.getJsonData(this.GeoSpatialAboutConfiguration_EN_URL).subscribe(
        (value: any) => {
          this.config.geoSpatial.about = value;
        }
      );
      this.getJsonData(this.DataCatalogueConfiguration_EN_URL).subscribe(
        (value: any) => {
          this.config.geoSpatial.dataCatalogue = value;
        }
      );
      this.getJsonData(this.ApplicationCatalogueConfiguration_EN_URL).subscribe(
        (value: any) => {
          this.config.geoSpatial.applicationCatalogue = value;
        }
      );
      this.getJsonData(this.StudiesAndDocumentsConfiguration_EN_URL).subscribe(
        (value: any) => {
          this.config.geoSpatial.studiesAndDocuments = value;
        }
      );

      // Urban Observatory
      this.getJsonData(this.SectorsConfiguration_EN_URL).subscribe(
        (value: any) => {
          this.config.urbanObservatory.sectors = value;
        }
      );

      // this.config.aboutConfiguration = AboutConfiguration_EN;
      // this.config.dataCatalogueConfiguration = DataCatalogueConfiguration_EN;
      // this.config.applicationCatalogue = ApplicationCatalogueConfiguration_EN;
      // this.config.studiesAndDocumentsConfiguration = StudiesAndDocumentsConfiguration_EN;
      // this.config.bannerVideoConfiguration = BannerVideoConfiguration_EN;
    }
  }

  loadAllData(): any {
    this.getJsonData(this.ApplicationCatalogueData_URL).subscribe(
      (value: any) => {
        this.data.ApplicationCatalogueData = value;
      }
    );
    this.getJsonData(this.DataCatalogueData_URL).subscribe((value: any) => {
      this.data.DataCatalogueData = value;
    });
    this.getJsonData(this.AboutData_URL).subscribe((value: any) => {
      this.data.AboutData = value;
    });
    this.getJsonData(this.PartnersData_URL).subscribe((value: any) => {
      this.data.PartnersData = value;
    });
    this.getJsonData(this.ProductsData_URL).subscribe((value: any) => {
      this.data.ProductsData = value;
    });
    this.getJsonData(this.ServiceData_URL).subscribe((value: any) => {
      this.data.ServiceData = value;
    });
    this.getJsonData(this.BIDashboardData_URL).subscribe((value: any) => {
      this.data.BIDashboardData = value;
    });
    this.getJsonData(this.SectorsData_URL).subscribe((value: any) => {
      this.data.SectorsData = value;
    });
    this.getJsonData(this.StudiesAndDocumentsData_URL).subscribe(
      (value: any) => {
        this.data.StudiesAndDocumentsData = value;
      }
    );
    this.getJsonData(this.popupData_URL).subscribe((value: any) => {
      this.data.popupTemplate = value;
    });
  }

  // A method to query data from an ESRI feature service by a given URL and query parameters
  queryFeatureService(_url: string, condition: string): Observable<any> {
    const layer = new FeatureLayer({ url: _url });
    const query = new Query({
      outFields: ['*'],
      where: condition,
    });
    return defer(() => from(layer.queryFeatures(query)));
  }
}
