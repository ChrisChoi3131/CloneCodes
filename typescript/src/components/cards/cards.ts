import { time } from "console";
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
    item.setCloseEventListener(() => {
      item.removeFrom(this.element);
    });
  }
}

class CardItemComponent extends BaseComponent<HTMLElement> implements Composable {
  private closeEventlistener: OnCloseListener;
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
    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeEventlistener && this.closeEventlistener();
    };
  }
  addChild(child: Component) {
    const container = this.element.querySelector(".card-item__body")! as HTMLElement;
    child.attachTo(container);
  }
  setCloseEventListener(listener: OnCloseListener) {
    this.closeEventlistener = listener;
  }
}
