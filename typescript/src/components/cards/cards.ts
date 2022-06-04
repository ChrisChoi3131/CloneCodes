import { BaseComponent } from "./../common/base.js";
export class CardsComponent extends BaseComponent {
  constructor() {
    super();
    this.element = document.createElement("ul");
    this.element.setAttribute("class", "page");
    this.element.textContent = "CardsComponent";
  }
}
