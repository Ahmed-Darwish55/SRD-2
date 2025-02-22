import { SectorsComponent } from './../../Urban-Observatory/sectors/sectors.component';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { KeenSliderInstance } from 'keen-slider';
import KeenSlider from 'keen-slider';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';
let animation = { duration: 42000, easing: (t: any) => t };

@Component({
  selector: 'app-application-catalogue',
  templateUrl: './application-catalogue.component.html',
  styleUrls: ['./application-catalogue.component.scss'],
})
export class ApplicationCatalogueComponent {
  @Input() configParam: any;
  data: any;
config: any;
  @ViewChild('sliderRef')
  sliderRef!: ElementRef<HTMLElement>;
 

  pauseSlider() {
    this.slider.animator.stop()
  }
  
  resumeSlider() {
    this.slider.moveToIdx(this.slider.track.details.abs + 5, true, animation);
  }
  slider: any = null;
  constructor(config: ConfigurationService) {
    this.data = config.data.ApplicationCatalogueData;
    this.config = config;
  }
  
  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      rtl: true,
      drag: true,
      // disabled:this.sliderPaused,
      breakpoints: {
        '(min-width: 300px)': {
          slides: { perView: 1, spacing: 30 },
        },
        '(min-width: 700px)': {
          slides: { perView: 2, spacing: 10 },
        },
        '(min-width: 1000px)': {
          slides: { perView: 4, spacing: 10 },
        },
      },
      renderMode: 'performance',
      created(s) {
        s.moveToIdx(5, true, animation);
        
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      
    }
  )}

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
