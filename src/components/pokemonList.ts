/* Import { Component } from './component';
import { Pokemon } from '../model/type';

import { Card } from './card';
/* Import '../scss/style.scss'; 
import { ApiPokemon } from '../data/repo';

export class List extends Component {
  pokemons: Pokemon[];
  repo: ApiPokemon;
  template: string;
  constructor(selector: string) {
    super(selector);
    this.repo = new ApiPokemon();
    this.pokemons = [];
    this.loadPokemons();
    console.log('First Load');
    console.log(this.pokemons);
    this.template = this.createTemplate();
    this.render();
  }

  async loadPokemons() {
    try {
      this.pokemons = await this.repo.getAllPokemon();
      console.log('Load from API');
      console.log(this.pokemons);
      this.clear();
      this.render();
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  clear() {
    throw new Error('Method not implemented.');
  }

  render() {
    this.template = this.createTemplate();
    super.render();
    console.log('LISTA CON CARDS DE POKEMON');
    console.log(this.pokemons);

    const listPokemons: Pokemon[] = this.pokemons.content;

    return listPokemons.map((item) => new Card('.cards', item));
  }

  createTemplate() {
    return `
    <div class="buttons-pages">
   
    </div>
    <ul class="cards"></ul>`;
  }
} */
