import { Component, OnInit  } from '@angular/core';
import { PostService } from './services/post.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
  resultAPI: any;
  resultSpotify: any;
  accessToken: string;

  
  constructor(private service:PostService, private route: ActivatedRoute) {
    this.accessToken = ''
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['code'] !== '') {
        this.accessToken = params['code']
      }
    })
  }

  getDataFromAPI(formQuery: any) {
    if (!(formQuery === '') && this.accessToken !== '') {
      this.service.getPosts(formQuery).subscribe(response => {   
        this.resultAPI = response;
        this.service.searchSpotify(this.resultAPI.results[0].original_title, this.accessToken)
          .subscribe(res => {
            this.resultSpotify = res;
          });
      });
    }
  }
}