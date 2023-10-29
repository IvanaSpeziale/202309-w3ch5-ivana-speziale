import { Pokemon } from '../model/type';

export class ApiRepo {
  querySelector() {
    throw new Error('Method not implemented.');
  }

  apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  async getPoke(): Promise<Pokemon[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
