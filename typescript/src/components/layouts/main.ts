import { CardsComponent } from "./../cards/cards.js";
import { ImageComponent } from "./../cards/items/image.js";

export class Main {
  private readonly card: CardsComponent;
  private readonly main: HTMLElement;
  constructor() {
    this.main = document.querySelector(".document")!;
    this.card = new CardsComponent();
    this.card.attachTo(this.main);
    const image = new ImageComponent("TEST Image", "https://picsum.photos/600/300");
    image.attachTo(this.main, "beforeend");
  }
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.main);
  }
}
