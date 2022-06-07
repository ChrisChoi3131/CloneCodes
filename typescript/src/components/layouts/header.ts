import { BaseComponent } from "../common/conponents.js";
import { InputDialog } from "../dialog/dialog.js";

export class Header extends BaseComponent<HTMLElement> {
  constructor(title: string) {
    super(`
      <header id="header" class="width-full position-fixed top-0 d-flex flex-column flex-justify-center flex-items-center">
        <h1 class="header__title"></h1>
        <ul class="d-flex">
          <li>
            <button id="new-image" class="mr-2">Image</button>
          </li>
          <li>
            <button id="new-video" class="mr-2">Video</button>
          </li>
          <li>
            <button id="new-node" class="mr-2">Note</button>
          </li>
          <li>
            <button id="id="new-task"">Task</button>
          </li>
        </ul>
      </header>      
    `);
    const headerTitle = this.element.querySelector(".header__title");
    headerTitle.textContent = title;
    const imgBtn = this.element.querySelector("#new-image")! as HTMLElement;
    imgBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.element);
      });
      dialog.setOnSubmitListener(() => {
        dialog.removeFrom(this.element);
      });
      dialog.attachTo(this.element);
    });
  }
}
