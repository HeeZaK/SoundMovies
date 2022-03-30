import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar-movie',
  templateUrl: './search-bar-movie.component.html',
  styleUrls: ['./search-bar-movie.component.css']
})
export class SearchBarMovieComponent {
  @Output() handlerSetResearchWord = new EventEmitter<{recherche:string,tokenUserSpotify:string}>();
  
  constructor() { }

  handleclick(rechercheValue: string, tokenValue: string) {
    console.log("salut");
    
    this.handlerSetResearchWord.emit({recherche:rechercheValue, tokenUserSpotify:tokenValue});
  }

}
