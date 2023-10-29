import { Header } from './components/header';
import { Button } from './components/buttons';
import { List } from './components/pokemonList';

function main() {
  const appElement = document.querySelector<HTMLDivElement>('.container');
  if (appElement === null) return;

  const header = new Header('.container');
  const list = new List('.container');
  const button = new Button('.container');
  list.render();

  console.log(header, list, button);
}

main();
