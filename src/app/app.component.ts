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
    this.researchWord = newItem
    if (!(newItem === '')) {
      this.service.getPosts(newItem)
        .subscribe(response => {       
          this.resultAPI = response;
        });
    }
  }
}