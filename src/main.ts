/* Import './styles/style.scss'; */

import { Header } from './components/header';
import { Button } from './components/buttons';
import { Card } from './components/card';
import { list } from 'postcss';

function main() {
  // eslint-disable-next-line no-new
  new Header('#app');

  /*   New Card('#list', Card); */
  // eslint-disable-next-line no-new
  new Button('#buttons');
}

main();
