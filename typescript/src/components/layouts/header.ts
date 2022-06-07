import { BaseComponent } from "../common/conponents.js";

export class Header extends BaseComponent<HTMLElement> {
  // private readonly header: HTMLElement;
  constructor() {
    super(`
      <header id="header" class="width-full position-fixed top-0 d-flex flex-column flex-justify-center flex-items-center">
        <h1>Card Drag & Drop</h1>
        <ul class="d-flex">
          <li>
            <button class="mr-2">Image</button>
          </li>
          <li>
            <button class="mr-2">Video</button>
          </li>
          <li>
            <button class="mr-2">Note</button>
          </li>
          <li>
            <button>Task</button>
          </li>
        </ul>
      </header>      
    `);
  }
}
