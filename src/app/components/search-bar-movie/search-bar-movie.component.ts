import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar-movie',
  templateUrl: './search-bar-movie.component.html',
  styleUrls: ['./search-bar-movie.component.css']
})
export class SearchBarMovieComponent {
  recherche = '';
  
  
  constructor() { }

  onChangeEvent(event: any){
    console.log(event.target.value);
    this.recherche = event.target.value
  }

}
