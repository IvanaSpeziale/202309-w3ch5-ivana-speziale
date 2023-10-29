import { Component } from './component';
import { ApiRepo } from '../data/repo';
import { Card } from './card';
import { Pokemon } from '../model/type';

export class List extends Component {
  pokes: Pokemon[];
  repo: ApiRepo;

  constructor(selector: string) {
    super(selector);
    this.repo = new ApiRepo();
    this.pokes = [];
    this.loadPokes();
  }

  async loadPokes() {
    try {
      this.pokes = await this.repo.getPoke();
      this.clear();
      this.render();
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  clear() {
    // Borra el contenido del elemento ul
    const ulElement = document.querySelector(`${this.selector} ul`);
    if (ulElement) {
      ulElement.innerHTML = '';
    }
  }

  render() {
    const ulElement = document.querySelector(`${this.selector} ul`);
    if (ulElement) {
      this.pokes.forEach((item: Pokemon) => {
        const card = new Card('li', item);
        const cardElement = card.render(); // Obtener el elemento de la tarjeta
        ulElement.appendChild(cardElement);
      });
    }
  }

  createTemplate() {
    return `
      <ul></ul>
    `;
  }
}
