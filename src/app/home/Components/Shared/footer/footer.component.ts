import { Component, OnInit , Injectable, Input} from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit  {
  copyRightYear=new Date().getFullYear()  // returns the current year

  serviceGates:any;
  @Input() configParam: any;
  constructor(){
  }

  ngOnInit(): void {
  }
}
