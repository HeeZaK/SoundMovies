import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-synopsis',
  templateUrl: './synopsis.component.html',
  styleUrls: ['./synopsis.component.css']
})
export class SynopsisComponent {
  @Input() item : any;

  constructor() {

  }

}
