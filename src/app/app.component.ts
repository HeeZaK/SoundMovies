import { Component  } from '@angular/core';
import { PostService } from './services/post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  resultAPI: any;
  resultSpotify: any;
  researchWord: string;

  
  constructor(private service:PostService) {
    this.researchWord = ""
  }

  getDataFromAPI(newItem: string) {
    console.log("bonjour");
    this.researchWord = newItem
    if (!(newItem === '')) {
      this.service.getPosts(newItem)
        .subscribe(response => {     
          console.log(response); 
          this.resultAPI = response;
        });
    }
  }

  spotifySearch() {
    console.log(this.researchWord);
    if (!(this.researchWord === '')) {
      this.service.searchSpotify(this.researchWord)
        .subscribe(response => {     
          console.log(response); 
          this.resultSpotify = response;
        });
    }
  }
}