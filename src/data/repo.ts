export class ApiPokemon {
  pokeUrl: string;
  offset: number = 0; // Inicializa el offset en 0

  constructor() {
    this.pokeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20'; // Limita a 20 por página
  }

  async getAllPokemon() {
    const response = await fetch(this.pokeUrl);
    const pokeList = await response.json();
    return pokeList.results;
  }

  async getEachPokemon(offset: number) {
    const pokeContainer = await this.fetchPage(offset, []);
    return pokeContainer;
  }

  async fetchPage(offset: number, container: any[]): any {
    const pageUrl = `${this.pokeUrl}&offset=${offset}`;
    const response = await fetch(pageUrl);
    const pokeList = await response.json();
    const pokeDataContainer = await Promise.all(
      pokeList.results.map(async (pokemon: { url: string }) => {
        const eachUrl = pokemon.url;
        const response = await fetch(eachUrl);
        const pokeData = await response.json();
        return pokeData;
      })
    );

    if (pokeDataContainer.length > 0) {
      container.push(...pokeDataContainer);
      offset += 20; // Incrementa el offset para la próxima página
      return this.fetchPage(offset, container);
    }

    return container;
  }
}
