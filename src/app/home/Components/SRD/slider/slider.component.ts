import { Component, Input } from '@angular/core';
import {
  NgbCarouselConfig,
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() configParam: any;
  isInitiated:boolean = false;
  constructor(carouselConfig: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    carouselConfig.interval = 10000;
    carouselConfig.wrap = true;
    carouselConfig.keyboard = true;
    carouselConfig.pauseOnHover = true;
    carouselConfig.showNavigationIndicators = false;
    carouselConfig.showNavigationArrows=false
  }
  onSlide(e: any, carol: any) {
    this.isInitiated=true;
  }
}
