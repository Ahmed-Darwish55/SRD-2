import { Component, OnInit , Injectable, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit  {
  @Input() configParam: any;

  constructor(){
  }

  ngOnInit(): void {
  }
}
