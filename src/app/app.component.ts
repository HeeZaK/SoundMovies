import { Component  } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  resultAPI:any;
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
          let tempo = response; 
          this.resultAPI = response;
        });
    }
  }
}