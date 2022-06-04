export class BaseComponent {
  protected element: HTMLElement;
  constructor() {}
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
