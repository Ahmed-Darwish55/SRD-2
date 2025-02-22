import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';

// Import Services
import { ConfigurationService } from './Services/configuration.service';
import { delay, filter } from 'rxjs';
import { ActivatedRoute, Router, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
// Import Configurations

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('geospatialAbout', { static: false, read: ElementRef })
  geospatialAbout!: ElementRef;
  newInstance = true;

  config: any;
  constructor(
    private configService: ConfigurationService,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    this.config = this.configService.config;

    this.router.events
      .pipe(filter((e) => e instanceof Scroll))
      .subscribe((e: any) => {
        if (e.position) {
          this.newInstance = false;
          setTimeout(() => {
            this.viewportScroller.scrollToPosition(e.position);
            this.config.headerConfiguration.showHeader = true;
          }, 10);
        } else if (e.anchor) {
          this.newInstance = false;
          setTimeout(() => {
            this.config.headerConfiguration.showHeader = true;
            this.viewportScroller.scrollToAnchor(e.anchor);
          }, 10);
        } else {
          this.newInstance = true;
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }

  private scrollTimeout: any;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    if (this.geospatialAbout) {
      clearTimeout(this.scrollTimeout);

      this.scrollTimeout = setTimeout(() => {
        let geospatialAboutTop =
          this.geospatialAbout.nativeElement.getBoundingClientRect().top;
        let geospatialAboutBottom =
          this.geospatialAbout.nativeElement.getBoundingClientRect().bottom;
        this.config.headerConfiguration.showHeader =
          geospatialAboutTop - 70 > 0 ||
          geospatialAboutBottom < 0;
      }, 100);
    }
  }
}
