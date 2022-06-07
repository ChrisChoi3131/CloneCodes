import { Composable } from "./../cards/cards";
import { BaseComponent, Component } from "../common/conponents.js";

type OnCloseListener = () => void;
type OnSubmitListener = () => void;
export class InputDialog extends BaseComponent<HTMLElement> implements Composable {
  private closelistener?: OnCloseListener;
  private submitlistener?: OnSubmitListener;
  constructor() {
    super(`
    <dialog class="dialog">
      <button class="close">&times;</button>
      <div id="dialog__body"></div>
      <button class="dialog__submit">ADD</button>
    </dialog>    
    `);
    const closeBtn = this.element.querySelector(".close")! as HTMLElement;
    closeBtn.onclick = () => {
      this.closelistener && this.closelistener();
    };
    const submitBtn = this.element.querySelector(".dialog__submit")! as HTMLElement;
    submitBtn.onclick = () => {
      this.submitlistener && this.submitlistener();
    };
  }
  addChild(child: Component): void {
    const body = this.element.querySelector("#dialog__body")! as HTMLElement;
    child.attachTo(body);
  }
  setOnCloseListener(listner: OnCloseListener) {
    this.closelistener = listner;
  }
  setOnSubmitListener(listner: OnSubmitListener) {
    this.submitlistener = listner;
  }
}
