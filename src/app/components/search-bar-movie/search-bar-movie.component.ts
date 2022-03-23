import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar-movie',
  templateUrl: './search-bar-movie.component.html',
  styleUrls: ['./search-bar-movie.component.css']
})
export class SearchBarMovieComponent {
  recherche = '';
  @Output() handlerSetResearchWord = new EventEmitter<string>();
  
  constructor() { }

  handleclick(value: string) {
    console.log("salut");
    
    this.handlerSetResearchWord.emit(value);
  }

}
