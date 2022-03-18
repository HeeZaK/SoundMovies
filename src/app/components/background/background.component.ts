import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {

    var request = new XMLHttpRequest();

    var API_KEY = '3b021ae1d32cf743a19a4701eb265f50';
    var URL = "https://api.themoviedb.org/3/movie/550/images?api_key="+API_KEY;
    request.open("GET",URL);
    request.send();
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        var azer = JSON.parse(request.responseText);
        //alert(request.responseText);
        console.log(azer['posters'][0]['file_path']);
      }
    }
    
  }

}
