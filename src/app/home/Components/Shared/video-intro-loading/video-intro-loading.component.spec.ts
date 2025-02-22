import { ComponentFixture, TestBed } from '@angular/core/testing';

import VideoIntroLoadingComponent from './video-intro-loading.component';

describe('VideoIntroLoadingComponent', () => {
  let component: VideoIntroLoadingComponent;
  let fixture: ComponentFixture<VideoIntroLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoIntroLoadingComponent]
    });
    fixture = TestBed.createComponent(VideoIntroLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
