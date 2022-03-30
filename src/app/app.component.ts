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

  
  constructor(private service:PostService) {
  }

  getDataFromAPI(formQuery: any) {
    if (!(formQuery.tokenUserSpotify === '') && !(formQuery.recherche === '')) {
      this.service.getPosts(formQuery.recherche)
        .subscribe(response => {     
          console.log(response); 
          this.resultAPI = response;

          this.service.searchSpotify(this.resultAPI.results[0].original_title, formQuery.tokenUserSpotify)
            .subscribe(res => {
              console.log(res);
              this.resultSpotify = res;
            });
        });
    }
  }
}