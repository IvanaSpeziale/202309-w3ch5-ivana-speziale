export abstract class Component {
  template!: string;
  element!: Element;
  // eslint-disable-next-line no-useless-constructor, no-unused-vars
  constructor(public selector: string) {}
  // eslint-disable-next-line no-undef
  render(position: InsertPosition = 'beforeend') {
    const parentElement = document.querySelector(this.selector);
    if (!parentElement) throw new Error('Invalid selector');
    parentElement.insertAdjacentHTML(position, this.template);
    this.element = parentElement.lastElementChild!;
  }

  cleanHtml() {
    if (!this.element) return;
    this.element.outerHTML = '';
  }
}
