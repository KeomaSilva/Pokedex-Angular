import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {
  pokemons: any = [];
  types = [];
  

  constructor( private httpClient:HttpClient) {
    this.getPokemons();
   }
  async getPokemons() {
    const request = await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=9').toPromise();
    
    this.pokemons = request.results;
    // console.log(request);
    this.getTypes();
  }

  async getTypes() {
    this.pokemons.map( async (element:any) => {
      console.log(element);
      const typesPokemon = await this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon/${element.name}`).toPromise();
      element.types = typesPokemon.types;
      element.batata = typesPokemon.weight;
      console.log(typesPokemon);
      
    });
    console.log(this.pokemons);
    
    
    // this.types = typesPokemon.results;
    
    
    
  }
}
 