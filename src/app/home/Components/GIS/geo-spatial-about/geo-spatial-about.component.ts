import { Component, HostListener, Inject, Input, OnInit,ChangeDetectorRef  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as Aos from 'aos';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';

@Component({
  selector: 'app-geo-spatial-about',
  templateUrl: './geo-spatial-about.component.html',
  styleUrls: ['./geo-spatial-about.component.scss'],
})
export class GeoSpatialAboutComponent implements OnInit {
  @Input() configParam: any;
  data: any;
  hoveredGovernorate: any;
  isGeographySectionHidden: boolean = false;
  isAccessibilitySectionHidden: boolean = true;
  isSupervisoryScopeSectionHidden: boolean = true;
  isGovernorateHovered: boolean = false;
  lnnguage:string=""
  videoSrc:any
  constructor(
    @Inject(DOCUMENT) private document: Document,
    config: ConfigurationService,
    public configService: ConfigurationService,
    private cdr:ChangeDetectorRef
  ) {
    this.data = config.data.AboutData;
  }

  ngAfterViewInit(): void {
     this.configService.lang.subscribe(x => this.lnnguage=x);
   
    // this.configService.lang.subscribe(console.log);
    // this.cdr.detectChanges()
    // // console.log(this.videoSrc)
    // console.log('ln==>',this.ln)
    // console.log('service ',this.configService.lang)
    // this.videoSrc()
  }
  // cahngsource(){
  //   this.configService.lang.subscribe(x => this.ln = x);
  //   this.configService.lang.subscribe(console.log);
  //   console.log('cahngsource ln ==> ',this.ln)
  //   console.log('cahngsource ',this.configService.lang)
    
  // }
  // viseoSrc():string{
  //   this.configService.lang.subscribe(x => this.lnnguage=x);
  //   return this.lnnguage=='ar'?this.videoSrc=this.configParam.geoSpatial.about.geography.videoURL:"ahmed"
  //   // this.cdr.detectChanges()
  // }
  // this.configService.lang.subscribe(x => this.switchLang = x)

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // console.log('height=' + document.body.scrollTop);
    // console.log('height 2=' + document.documentElement.scrollTop);
    if (window.devicePixelRatio >= 1.5) {
      if (
        document.body.scrollTop > 680 ||
        document.documentElement.scrollTop > 680
      ) {
        this.document.getElementById('video')?.classList.add('intro');
        this.document.querySelector('.cover-video')?.classList.add('intro2');
        setTimeout(() => {
          this.document.querySelector('.cover-video')?.classList.add('hide-display');
        },6500)      }
    } else if (window.devicePixelRatio >= 1.2) {
      if (
        document.body.scrollTop > 680 ||
        document.documentElement.scrollTop > 780
      ) {
        this.document.getElementById('video')?.classList.add('intro');
        this.document.querySelector('.cover-video')?.classList.add('intro2');
        setTimeout(() => {
          this.document.querySelector('.cover-video')?.classList.add('hide-display');
        },6500)
      }
      
    } else {
      if (
        document.body.scrollTop > 260 ||
        document.documentElement.scrollTop > 990
      ) {
        this.document.getElementById('video')?.classList.add('intro');
        this.document.querySelector('.cover-video')?.classList.add('intro2');
        setTimeout(() => {
          this.document.querySelector('.cover-video')?.classList.add('hide-display');
        },6500)
      }
    }
  }

  ngOnInit(): void {
    Aos.init();
    // this.ln=='ar'?this.videoSrc=this.configParam.geoSpatial.about.geography.videoURL:"ahmed";
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      const lang = htmlElement.getAttribute('lang');
      if (lang) {
        this.lnnguage = lang;
      }
  }
  // console.log(this.ln);
//  this.videoSrc()
  this.cdr.detectChanges()
  
}

  showGeographySection() {
    this.isGeographySectionHidden = false;
    this.isAccessibilitySectionHidden = true;
    this.isSupervisoryScopeSectionHidden = true;
    this.isGovernorateHovered = false;
  }
  showAccessibilitySection() {
    this.isGeographySectionHidden = true;
    this.isAccessibilitySectionHidden = false;
    this.isSupervisoryScopeSectionHidden = true;
    this.isGovernorateHovered = true;
  }
  showSupervisoryScopeSection() {
    this.isGeographySectionHidden = true;
    this.isAccessibilitySectionHidden = true;
    this.isSupervisoryScopeSectionHidden = false;
    this.isGovernorateHovered = true;
  }

  displayGovernorateImage(governorate: string) {
    this.isAccessibilitySectionHidden = true;
    this.isSupervisoryScopeSectionHidden = true;
    this.isGovernorateHovered = true;
    this.hoveredGovernorate =
      this.configParam.geoSpatial.about.geography.Governorate[governorate];
      this.configParam.geoSpatial.about.geography.Governorate[governorate][
      'hidden'
    ] = false;
  }
  hideGovernorateImage(governorate: string) {
    this.isAccessibilitySectionHidden = true;
    this.isSupervisoryScopeSectionHidden = true;
    this.isGovernorateHovered = false;
    this.hoveredGovernorate = null;
    Object.keys(
      this.configParam.geoSpatial.about.geography.Governorate
    ).forEach((k) => {
      this.configParam.geoSpatial.about.geography.Governorate[k]['hidden'] =
        true;
    });
  }

  getGovernorateImageObject(governorate: any) {
    return this.configParam.geoSpatial.about.geography.Governorate[governorate];
  }
}
