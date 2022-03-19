import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://geo.api.gouv.fr/communes?codePostal='
  private urlbis = '&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(arg: string){
    return this.httpClient.get(this.url + arg + this.urlbis);
  }
}