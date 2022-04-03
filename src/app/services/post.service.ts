import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  // Url d'accès a l'api movie data base avec notre token d'accès on coupe l'url aà la fin pour y rajouter le film recherché
  private urltmdb = 'https://api.themoviedb.org/3/search/movie?api_key=b81ad5ba83ff9be67db898fb4c381b29&language=fr-FR&page=1&include_adult=false&query=';
  // Url d'accès a l'api spotify avec notre token d'accès on coupe l'url aà la fin pour y rajouter les musiques liées au film recherché
  private urlSpotify = 'https://api.spotify.com/v1/search?type=track&include_external=audio&limit=20&q=';
  
  constructor(private httpClient: HttpClient) { }
  
  getPosts(arg: string){
    // ici on rajoute l'element récuperé dans la search c-a-d le film recherché pour aller recupérer les fichiers en rapport avec le film
    return this.httpClient.get(this.urltmdb + encodeURIComponent(arg));
  }

  searchSpotify(arg: string, token: string){
    // ici on rajoute l'element récuperé dans la search c-a-d le film recherché pour aller recupérer les fichiers en rapport avec le film
    return this.httpClient.get(this.urlSpotify + encodeURIComponent(arg),{
      headers:
      {
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
      }
   });
  }
}

