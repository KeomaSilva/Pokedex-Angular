import { Component } from '@angular/core';
import { ApiPokemonService } from 'src/app/service/api-pokemon.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  constructor(public pokemonservice:ApiPokemonService){}    

}
