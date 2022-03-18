import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-synopsis',
  templateUrl: './synopsis.component.html',
  styleUrls: ['./synopsis.component.css']
})
export class SynopsisComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

    var request = new XMLHttpRequest();

    var API_KEY = '3b021ae1d32cf743a19a4701eb265f50';
    
    var ID_MOVIE='550';
    
    var URL = "https://api.themoviedb.org/3/movie/"+ID_MOVIE+"?api_key="+API_KEY;

    request.open("GET",URL);
    request.send();
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        var azer = JSON.parse(request.responseText);
        console.log(azer['overview']);
      }
    }
  }

}
