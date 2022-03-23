import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urltmdb = 'https://api.themoviedb.org/3/search/movie?api_key=b81ad5ba83ff9be67db898fb4c381b29&language=fr-FR&page=1&include_adult=false&query=';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(arg: string){
    return this.httpClient.get(this.urltmdb + arg);
  }
}
