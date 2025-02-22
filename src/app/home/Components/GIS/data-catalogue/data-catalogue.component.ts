import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as Aos from 'aos';
import * as echarts from 'echarts/core';
import { GaugeChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

echarts.use([GaugeChart, CanvasRenderer]);

@Component({
  selector: 'app-data-catalogue',
  templateUrl: './data-catalogue.component.html',
  styleUrls: ['./data-catalogue.component.scss'],
})
export class DataCatalogueComponent implements OnInit {
  @Input() configParam: any;
  data: any;
  isFrozen: boolean = false;
  isThemeClicked: boolean = false;
  @ViewChild('tooltip')
  hoveredThemeId: string = '';
  selectedTheme: any;
  defaultMapImage: string = '';
  lang: string = '';
  caption: any = {
    ar: 'الطبقات المتوفرة : 392' + '\n' + 'الإجمالي : 691 طبقة',
    en: 'Registered in the class: 392' + '\n' + 'Total: 691 layers',
  };
  subCaption: any = {
    ar: 'نسبة الإشغال من الإجمالي : ',
    en: 'Occupancy rate of the total: ',
  };

  //Chart
  chartData = {
    chart: {
      caption: '',
      subCaption: '',
      lowerlimit: '0',
      upperlimit: '100',
      lowerlimitdisplay: '0%',
      upperlimitdisplay: '100%',
      numbersuffix: ' %',
      cylfillcolor: '#001b30',

      cylfillhoveralpha: '80',

      bgColor: '#ffffff',
      baseFont: 'Tajawal',
      baseFontColor: '#0c273c',
      toolTipBorderColor: '#dcc69d',
      toolTipBgColor: '#dcc69d',
      toolTipBgAlpha: '60',
      toolTipFontColor: '#ffffff',
      showToolTipShadow: '1',
      theme: 'fusion',
    },
    value: '22',
    name: '',
  };
  width = '300';
  height = '470';
  type = 'cylinder';
  dataFormat = 'json';
  dataSource: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public config: ConfigurationService
  ) {
    this.data = config.data.DataCatalogueData;
    this.calculateChartValue();
    this.lang = config.getCurrentLanguage();
    this.updateChartLanguage(this.lang);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.lang = config.getCurrentLanguage();
        this.updateChartLanguage(this.lang);
      }
    });
  }

  private calculateChartValue() {
    let totalFeature = 0;
    let totalSDAFeatures = 0;
    this.data.themes.reduce((sum: number = 0, e: any) => {
      totalFeature += Number.parseInt(e.NoOfFeature);
      totalSDAFeatures += Number.parseInt(e.SDAFeature);
    }, 0);
    this.chartData.value = ((totalSDAFeatures / totalFeature) * 100).toString();
    this.chartData.chart.subCaption =
      this.subCaption[this.lang] +
      '%' +
      parseFloat(this.chartData.value).toFixed(2);
    this.dataSource = this.chartData;
  }

  ngOnInit(): void {
    Aos.init();
    this.defaultMapImage =
      this.configParam.geoSpatial.dataCatalogue.centerDefaultImage;
  }

  ngAfterViewInit() {
    //this.cd.detectChanges();
  }

  themeHover(id: string) {
    if (!this.isThemeClicked) {
      // pause
      this.isFrozen = true;
      if (this.hoveredThemeId != id) {
        this.addHoldClassToTheme(id);
        this.updateMeasureValue(id);
      }
    }
  }
  private addHoldClassToTheme(id: string) {
    document.getElementById(id)?.classList.add('hold_' + id);
    this.hoveredThemeId = id;
    this.defaultMapImage = this.data.centerDefaultImage;
    this.displayThemeData(id);
  }

  themeMouseOut(id: string) {
    if (!this.isThemeClicked) {
      this.isFrozen = false;
      this.removeHoldClassFromTheme(id);
      this.calculateChartValue();
    }
  }
  private removeHoldClassFromTheme(id: string) {
    document.getElementById(id)?.classList.remove('hold_' + id);
    this.hoveredThemeId = '';
    this.selectedTheme = null;
    this.defaultMapImage =
      this.configParam.geoSpatial.dataCatalogue.centerDefaultImage;
    this.hideThemeData(id);
  }

  themeClicked(id: string) {
    if (this.selectedTheme?.id != id) {
      this.isThemeClicked = true;
      if (this.selectedTheme) {
        document
          .getElementById(this.selectedTheme?.id)
          ?.classList.remove('hold_' + this.selectedTheme?.id);
        this.hideThemeData(this.selectedTheme?.id);
      }
      this.getSelectedTheme(id);
      if (!document.getElementById(id)?.classList.contains('hold_' + id)) {
        document.getElementById(id)?.classList.add('hold_' + id);
      }
      this.displayThemeData(id);
    } else {
      this.isThemeClicked = false;
      this.removeHoldClassFromTheme(id);
    }
  }
  displayThemeData(id: string) {
    document
      .getElementById(id + '_GT')
      ?.classList.replace('false-opcty', 'opacityo');
    document
      .getElementById(id + '_LN')
      ?.classList.replace('false-opcty', 'opacityo');
    document
      .getElementById(id + '_Value')
      ?.classList.replace('false-opcty', 'opacityo');
  }
  hideThemeData(id: string) {
    document
      .getElementById(id + '_GT')
      ?.classList.replace('opacityo', 'false-opcty');
    document
      .getElementById(id + '_LN')
      ?.classList.replace('opacityo', 'false-opcty');
    document
      .getElementById(id + '_Value')
      ?.classList.replace('opacityo', 'false-opcty');
  }
  updateMeasureValue(id: string) {
    let theme = this.data.themes.find((theme: any) => theme.id == id);
    this.defaultMapImage = theme.mapImage;
    this.dataSource.value = theme.percentage;
    this.chartData.name = theme.name;
    this.chartData.chart.subCaption =
      this.subCaption[this.lang] +
      '%' +
      parseFloat(this.chartData.value).toFixed(2);
  }
  getSelectedTheme(id: string) {
    this.selectedTheme = this.data.themes.find((theme: any) => theme.id == id);
    if (this.hoveredThemeId != id) {
      this.hoveredThemeId = id;
      this.defaultMapImage = this.selectedTheme.mapImage;
      this.dataSource.value = this.selectedTheme.percentage;
      this.chartData.chart.subCaption =
        this.subCaption[this.lang] +
        '%' +
        parseFloat(this.chartData.value).toFixed(2);
    }

    //this.cd.detectChanges();
    //this.addHoldClassToTheme(id);
  }

  viewSubThemeData(subTheme: any) {
 console.log('subTheme',this.config.userCantAccessPage)
    const url = this.config.isUserCanAccessPortal
      ? subTheme.url + '&locale=' + this.lang
      : this.config?.userCantAccessPage;

    // window.open(subTheme.url + '&locale=' + [this.lang], '_blank');
    window.open(url, '_blank');
  }

  getThemeData(id: string): any {
    return this.data.themes.find((theme: any) => theme.id == id);
  }
  updateChartLanguage(lang: string): void {
    this.chartData.chart.caption = this.caption[this.lang];
    this.chartData.chart.subCaption =
      this.subCaption[this.lang] +
      '%' +
      parseFloat(this.chartData.value).toFixed(2);
  }
}
