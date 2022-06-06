import { BaseComponent, Component } from "../common/conponents.js";

export interface Composable {
  addChild(child: Component): void;
}
type OnCloseListener = () => void;
export class CardsComponent extends BaseComponent<HTMLElement> implements Composable {
  constructor() {
    super('<ul class="cards"></ul>');
  }
  addChild(section: Component) {
    const item = new CardItemComponent();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}

class CardItemComponent extends BaseComponent<HTMLElement> implements Composable {
  private closeListener?: OnCloseListener;
  constructor() {
    super(
      `
      <li class="card-item">
        <div class="card-item__body">
          <div class="card-item__controls">
            <button class="close">&times;</button>
          </div>
        </div>
      </li>
      `
    );
    const li = this.element;
    li.addEventListener("click", (e) => {
      const element = e.target as HTMLElement;
      if (element.tagName === "BUTTON" && element.className === "close") li.remove();
    });
  }
  addChild(child: Component) {
    const container = this.element.querySelector(".card-item__body")! as HTMLElement;
    child.attachTo(container);
  }
  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}
