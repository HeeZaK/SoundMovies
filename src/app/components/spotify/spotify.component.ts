import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
  * Permet de se connecter à l'API Spotify
  */
  loginSpotify(): void{
    //Fonction qui permet d'extraire le token client de l'URL du site
    const getUrlParameter = (sParam) => {
      let sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL != undefined && sPageURL.length > 0 ?
      sPageURL.split('#') : [],
      sParameterName,
      i;

      let split_str = window.location.href.length > 0 ?
      window.location.href.split('#') : [];

      sURLVariables = split_str != undefined && split_str.length > 1
      && split_str[1].length > 0 ? split_str[1].split('&') : [];

      for(i = 0; i < sURLVariables.length; i ++){
        sParameterName = sURLVariables[i].split('=');

        if(sParameterName[0] == sParam){
          return sParameterName[1] == undefined ? true :
          decodeURIComponent(sParameterName[1]);
        }
      }
    };
    //Le token d'accès est stocké dans cette variable
    const accessToken = getUrlParameter('8e1e76baaa5a4cd99cff11476b7028ab');

    /* BLOC CONNEXION */
    let client_id = '30acf2b3bcec442bb96f70af108a7453';
    /* URL du site pour la redirection après connexion (lien 
      encoder via le site ci-dessous) :
      https://www.url-encode-decode.com/ */

    let redirect_uri = 'https%3A%2F%2Fsoundmovies.go.yo.fr%2F';
    const redirect = '';
    if(accessToken == null || accessToken == "" || accessToken == undefined) 
      window.location.replace(redirect);
  
    /* On stock dans la variable d'instance du composant accueil le Token
    de connexion */
    this.token = accessToken.toString();
    /*On est maintenant connecte à Spotify (on peut donc afficher la page Spotify)*/
    this.isConnected = true;
    console.log("Le token d'accès est : " + this.token);
  }
}

