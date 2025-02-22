import { Component, OnInit,HostListener, Input, Output } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
@Component({
  selector: 'app-service-gates',
  templateUrl: './service-gates.component.html',
  styleUrls: ['./service-gates.component.scss'],
})
export class ServiceGatesComponent implements OnInit {

  @Input() configParam: any;
  selectedIndex: number = 0;
  screenHeight: number=0;
  screenWidth: number=0;
  constructor(private deviceService: DeviceDetectorService) {
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
  openGate(gate: any) {
    window.open(gate.url, '_blank');
  }
  ngOnInit(): void {
    this.selectedIndex = 0;
    // let firstImage = document.getElementById('gate-image-' + this.selectedIndex) as HTMLElement;
    // firstImage.classList.replace('hidden', 'active');
    // this.intializeScrollEvent();
  }
  ngAfterViewInit() {
    let firstImage = document.getElementById(
      'gate-image-' + this.selectedIndex
    ) as HTMLElement;
    firstImage.classList.replace('hidden', 'active');
  }
  NextGate() {
    if (this.selectedIndex < this.configParam.srd.gates.gates.length - 1) {
      let previousImage = document.getElementById(
        'gate-image-' + this.selectedIndex
      );
      previousImage?.classList.replace('active', 'showed');

      this.selectedIndex++;

      let nextImage = document.getElementById(
        'gate-image-' + this.selectedIndex
      );
      nextImage?.classList.replace('hidden', 'active');
    }
  }
  PreviousGate() {
    if (this.selectedIndex > 0) {
      let previousImage = document.getElementById(
        'gate-image-' + this.selectedIndex
      );
      previousImage?.classList.replace('active', 'hidden');

      this.selectedIndex--;

      let nextImage = document.getElementById(
        'gate-image-' + this.selectedIndex
      );
      nextImage?.classList.replace('showed', 'active');
    }
  }
  // intializeScrollEvent() {
  //   let serviceGatewrapper = document.getElementById(
  //     'service-gate-Wrapper'
  //   ) as HTMLElement;
  //   let serviceGateDescription = document.getElementById('service-gate-description') as HTMLElement;
  //   // window.addEventListener('scroll',  ()=> {
  //   //   if (window.scrollY >= serviceGatewrapper.offsetTop) {
  //   //     serviceGateDescription.classList.add('fixed');
  //   //   }
  //   //   else if(window.scrollY < serviceGatewrapper.offsetTop ){
  //   //     serviceGateDescription.classList.remove('fixed');
  //   //   }
  //   //});
  // }
}
