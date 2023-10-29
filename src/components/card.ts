import { Pokemon } from '../model/type';
import { Component } from './component';

/* Export class Card extends Component {
  static render() {
    throw new Error('Method not implemented.');
  }

  poke: Pokemon;
  constructor(selector: string, poke: Pokemon) {
    super(selector);
    this.poke = { ...poke };
    this.manageComponent();
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
  }

  createTemplate() {
    const id = this.poke.url.split('/').filter(Boolean).pop();
    return `
    <li class="task-card"><p>${id}</p>
    <div class = "image"><img class="gif" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif" alt="imagen del pokemon"></div>
      <p><span></span> ${this.poke.name}</p>
    </li>
      `;
  }
} */
export class Card extends Component {
  pokemon: Pokemon;

  constructor(selector: string, pokemon: Pokemon) {
    super(selector);
    this.pokemon = { ...pokemon };
  }

  render() {
    super.render();
    this.template = this.createTemplate();

    const cardElement = document.createElement('li');
    cardElement.innerHTML = this.template;

    return cardElement;
  }

  createTemplate() {
    // Crea el contenido de la tarjeta
    const id = this.pokemon.url.split('/').filter(Boolean).pop();
    return `
    <li class="pokemon_card">
    <p>${id}</p>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif" height="120" width="120">
      <h4 class="poke_name">${this.pokemon.name.toUpperCase()}</h4>
    </li>
      `;
  }
}
