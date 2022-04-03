import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
// On déclare musiques qui vient de app.component.html qui contient le résultat de l'api spotify donc les musiques etc
export class SpotifyComponent {
  @Input() musiques : any;

  constructor() { }

}
