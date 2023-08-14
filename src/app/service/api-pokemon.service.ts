import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {
  pokemons: any = [];
  types = [];
  names:Array<string> = [];
  

  constructor( private httpClient:HttpClient) {
    this.getPokemons();
    // this.getNames();
   }
  async getPokemons() {
    const request = await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=9').toPromise();
    
    this.pokemons = request.results;
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
    
    // getNames(){
    //   const request = this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=1010').toPromise();
    //   this.names = [];
    //   request.then((item) => {
    //     if(item.results){
    //       item.results.forEach((item:any) => {
    //         this.names.push(item.name);
    //       })
    //     }
    //   }).finally(() => console.log(this.names));
    // }
    
    
    // https://pokeapi.co/api/v2/type/
    // resulsts.name


    console.log(this.pokemons);
  }
}
 