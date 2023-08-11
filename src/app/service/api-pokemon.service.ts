import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {
  pokemons = [];

  constructor( private httpClient:HttpClient) {
    this.getPokemons();
   }
  async getPokemons() {
    const request = await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=1010').toPromise();
    
    this.pokemons = request.results;

  }
}
 