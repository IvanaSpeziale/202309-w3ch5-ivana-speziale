import { Component } from './component';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);

    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
  }

  createTemplate() {
    return ` 
    <header>
    <img src="./pokemon-logo.svg" alt="Header pokemon logo">
    </header>
    `;
  }
}
