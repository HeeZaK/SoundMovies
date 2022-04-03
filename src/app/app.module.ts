// Ici on importe tout les modules angular ainsi que nos components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarMovieComponent } from './components/search-bar-movie/search-bar-movie.component';
import { SynopsisComponent } from './components/synopsis/synopsis.component';
import { SpotifyComponent } from './components/spotify/spotify.component';
import { TitreComponent } from './components/titre/titre.component';
import { SocialIconComponent } from './components/social-icon/social-icon.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarMovieComponent,
    SynopsisComponent,
    TitreComponent,
    SocialIconComponent,
    SpotifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }