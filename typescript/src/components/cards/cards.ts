import { BaseComponent } from "../common/conponents.js";
export class CardsComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page">Cards Component</ul>');
  }
}
