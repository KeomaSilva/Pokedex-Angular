import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PokemonListComponent } from './components/pages/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pages/pokemon-card/pokemon-card.component';
import { SearchComponent } from './components/pages/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiPokemonService } from './service/api-pokemon.service';
import { DetailsComponent } from './components/pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PokemonListComponent,
    PokemonCardComponent,
    SearchComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiPokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
