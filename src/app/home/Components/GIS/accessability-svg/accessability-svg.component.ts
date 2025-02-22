import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import lottie from 'lottie-web';

interface AnimationData {
  [key: string]: any;
}

@Component({
  selector: 'app-accessability-svg',
  templateUrl: './accessability-svg.component.html',
  styleUrls: ['./accessability-svg.component.scss']
})
export class AccessabilitySvgComponent implements AfterViewInit, OnDestroy {
  @ViewChild('lottieContainer', { static: false }) lottieContainer!: ElementRef;
  private anim: any;
  private animations: AnimationData = {};
  private currentAnimationIndex = 0;
  private animationNames = ['animation0','animation1', 'animation2', 'animation3', 'animation4'];
  isLoading = true;
  loadingProgress = 0;
  loadingError: string | null = null;
// -------------------------------------------------------------------------------------------------
async ngAfterViewInit() {
  try {
    const promises = this.animationNames.map(async (name) => {
      const animationPath = `assets/animations/${name}.json`;
      try {
        const response = await fetch(animationPath);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} - ${response.url}`);
        }
        // -----------------------------------for loading progress-----------------------------------------
        const total = response.headers.get('content-length');
        let loaded = 0;
        const reader = response.body?.getReader();
        const chunks = [];
        while (true) {
          console.log('loading Darwish');
          const {done, value} = await reader!.read();
          if (done) {
            break;
          }
          chunks.push(value);
          loaded += value!.length;
          if (total) {
            this.loadingProgress = Math.round((loaded / parseInt(total)) * 100);
          }
        }
        const blob = new Blob(chunks);
        const text = await blob.text();
        return JSON.parse(text);
        // ----------------------------------------------------------------------------
      } catch (innerError) {
        console.error(`Error loading ${name}:`, innerError);
        return null;
      }
    });

    const animationDataArray = await Promise.all(promises);
    const validAnimations = animationDataArray.filter(data => data !== null);
      if (validAnimations.length === 0) {
          this.loadingError = 'لم يتم العثور على أي من ملفات الرسوم المتحركة.';
          this.isLoading = false;
          return;
      }
    this.animationNames = this.animationNames.filter((_item, index) => animationDataArray[index] != null)

    this.animationNames.forEach((name, index) => {
      this.animations[name] = validAnimations[index];
    });

    this.playNextAnimation();
  } catch (error) {
    console.error('General error loading animations:', error);
    this.isLoading = false;
      this.loadingError = "حدث خطأ عام اثناء تحميل الرسوم المتحركة"
  }
}
  // ----------------------------------------------playNextAnimation---------------------------------------------------
  playNextAnimation() {
    if (this.currentAnimationIndex < this.animationNames.length) {
      const currentAnimationName = this.animationNames[this.currentAnimationIndex];
      if (this.anim) {
        this.anim.destroy();
      }
      this.isLoading = true;
      this.anim = lottie.loadAnimation({
        container: this.lottieContainer.nativeElement,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: this.animations[currentAnimationName],
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      });

      this.anim.addEventListener('complete', () => {
        this.currentAnimationIndex++;
        this.playNextAnimation();
      });

      this.anim.addEventListener('error', (error: any) => {
        console.error('Error in animation:', error);
        this.currentAnimationIndex++;
        this.playNextAnimation();
      });
        this.anim.addEventListener('DOMLoaded', () => {
            this.isLoading = false; 
        });
    } else {
      this.isLoading = false;
      console.log('All animations completed!');
    }
  }
  ngOnDestroy() {
    if (this.anim) {
      this.anim.destroy();
    }
  }
}
