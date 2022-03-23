import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  @Input() item : any;

  constructor() {

   }

  ngOnInit(): void {

    
  }

}
