import { Component, OnInit  } from '@angular/core';
import { PostService } from './services/post.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Ici on crée et déclare 3 variables pour les relier aux enfants
export class AppComponent implements OnInit  {
  // resultat API de movie data base
  resultAPI: any;
  // resultat API de spotify
  resultSpotify: any;
  // token d'accès pour l'api movie data base
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
// Voici la fonction qui récupère toutes les infos des api en appelant le service
  getDataFromAPI(formQuery: any) {
    if (!(formQuery === '') && this.accessToken !== '') {
      // ici le subcribe va servir à suivre le changement de reponse donnée par le service
      this.service.getPosts(formQuery).subscribe(response => {   
        // Et le service va donner une valeur de retour que l'on met donc dans resultAPI on a donc fait l'appel de notre API movie data base
        this.resultAPI = response;
        //Puis on appel l'API spotify On lui donne en argument le titre du film et le token spotify
        this.service.searchSpotify(this.resultAPI.results[0].original_title, this.accessToken)
          .subscribe(res => {
            // on met le resultat de l'API spotify pour le film recherché dans resultSpotify
            this.resultSpotify = res;
          });
      });
    }
  }
}