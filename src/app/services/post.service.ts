import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urltmdb = 'https://api.themoviedb.org/3/search/movie?api_key=b81ad5ba83ff9be67db898fb4c381b29&language=fr-FR&page=1&include_adult=false&query=';
  private urlSpotify = 'https://api.spotify.com/v1/search?type=track%2Cartist&market=ES&limit=10&offset=5&q=';
  
  constructor(private httpClient: HttpClient) { }
  
  getPosts(arg: string){
    return this.httpClient.get(this.urltmdb + encodeURIComponent(arg));
  }
  searchSpotify(arg: string, token: string){
    return this.httpClient.get(this.urlSpotify + encodeURIComponent(arg),{
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
      }
   });
  }
}
