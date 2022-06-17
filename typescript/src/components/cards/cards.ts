import { BaseComponent, Component } from "../common/conponents.js";

type OnCloseListener = () => void;
type SectionContainerConstructor = {
  new (): SectionContainer;
};
export interface Composable {
  addChild(child: Component): void;
}
interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
}
export class CardsComponent extends BaseComponent<HTMLElement> implements Composable {
  constructor(private cardItemConstructor: SectionContainerConstructor) {
    super('<ul class="cards"></ul>');
  }
  addChild(section: Component) {
    const item = new this.cardItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}

export class CardItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {
  private closeEventlistener?: OnCloseListener;
  constructor() {
    super(
      `
      <li draggable="true" class="card-item">
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
  setOnCloseListener(listener: OnCloseListener) {
    this.closeEventlistener = listener;
  }
}
