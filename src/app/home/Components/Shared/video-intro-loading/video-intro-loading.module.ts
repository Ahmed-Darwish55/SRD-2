import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoIntroLoadingComponent } from './video-intro-loading.component';
import { FloatingPopupComponent } from './floating-popup/floating-popup.component';

@NgModule({
  declarations: [VideoIntroLoadingComponent, FloatingPopupComponent],
  imports: [CommonModule],
  providers: [],
  bootstrap: [VideoIntroLoadingComponent],
  exports: [VideoIntroLoadingComponent],
})
export class VideoIntroLoadingModule {}
