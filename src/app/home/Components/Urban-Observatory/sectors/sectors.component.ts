import { Component, Input, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss'],
})
export class SectorsComponent implements OnInit {
  scrollContainer: any;
  show: boolean = false;
  selectedSector: any;
  selectedIndicator: any;
  ngOnInit(): void {
    this.scrollContainer = document.querySelector('.sectors');
    let backBtn = document.getElementById('backBtn');
    let nextBtn = document.getElementById('nextBtn');

    this.scrollContainer.addEventListener('wheel', (evt: any) => {
      evt.preventDefault();
      this.scrollContainer.scrollLeft += evt.deltaY;
      this.scrollContainer.style.scrollBehavior = 'auto';
    });

    nextBtn?.addEventListener('click', () => {
      this.scrollContainer.style.scrollBehavior = 'smooth';
      this.scrollContainer.scrollLeft += 900;
    });
    backBtn?.addEventListener('click', () => {
      this.scrollContainer.style.scrollBehavior = 'smooth';
      this.scrollContainer.scrollLeft -= 900;
    });
  }

  @Input() configParam: any;
  data: any;
  configService: ConfigurationService;
  urbanView: any;
  constructor(config: ConfigurationService) {
    this.data = config.data.SectorsData;
    this.configService = config;
    this.selectedSector = this.data.UrbanData[0];
    this.queryData('1=1');
  }

  showHide() {
    this.show = !this.show;
  }
  getIndicators(sector: any) {
    this.selectedSector = sector;
  }
  openIndicatorCard(indicator: any) {
    this.selectedIndicator = indicator;
    this.showHide();
  }

  queryData(condition: string) {
    // this.configService.queryFeatureService(this.configParam.urbanObservatory.sectors.urbanFeatureService, condition).subscribe((result: any) => {
    //   this.urbanView = result.features.map((res: any) => { return res.attributes });
    // });
  }
}
