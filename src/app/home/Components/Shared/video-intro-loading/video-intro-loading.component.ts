import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-video-intro-loading',
  templateUrl: './video-intro-loading.component.html',
  styleUrls: ['./video-intro-loading.component.scss'],
})
export class   VideoIntroLoadingComponent implements OnInit {
  @Input() config: any;
  loadingTitle = '';
  currentLanguage: string = 'ar';

  constructor() {}
  ngOnInit(): void {
    this.writeChar(0);
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      const lang = htmlElement.getAttribute('lang');
      if (lang) {
        this.currentLanguage = lang;
      }
    }
  }
  writeChar(i: number) {
    let speed = 100;
    if (i < this.config.srd.slider.title.length) {
      this.loadingTitle += this.config.srd.slider.title.charAt(i);
      i++;
      setTimeout(() => this.writeChar(i), speed);
    }
  }
}
