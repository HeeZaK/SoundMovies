import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-synopsis',
  templateUrl: './synopsis.component.html',
  styleUrls: ['./synopsis.component.css']
})
// On déclare item qui vient de app.component.html qui contient le résultat de l'api Movie data base 
export class SynopsisComponent {
  @Input() item : any;

  constructor() {

  }

}
