import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import KeenSlider from 'keen-slider';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';
let animation = { duration: 42000, easing: (t: any) => t };
@Component({
  selector: 'app-studies-and-documents',
  templateUrl: './studies-and-documents.component.html',
  styleUrls: ['./studies-and-documents.component.scss'],
})
export class StudiesAndDocumentsComponent {
  @Input() configParam: any;
  data: any;
  constructor(config: ConfigurationService) {
    this.data = config.data.StudiesAndDocumentsData;
  }
  pauseSlider() {
    this.isLooping = false;
  }
  continueSlider() {
    this.isLooping = true;
  }

  isLooping: boolean = true;

  @ViewChild('sliderRef')
  sliderRef!: ElementRef<HTMLElement>;
  slider: any = null;

  ngAfterViewInit() {
    // if (this.data.studiesAndDocuments.length <= 4) {
    //   this.isLooping = false;
    // }
    this.pauseSlider();
    this.continueSlider();
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: this.isLooping,
      rtl: true,
      drag: true,
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
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
