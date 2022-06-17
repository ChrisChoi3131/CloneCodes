import { BaseComponent } from "../../common/conponents.js";
export class textInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(
      `
        <div>
          <label for="title">Title</label>
          <input type="text" id="title" />
        </div>
        <div>
          <label for="url">Text</label>
          <input type="text" id="text" />
        </div>    
      `
    );
  }
  get title(): string {
    const element = this.element.querySelector("#title")! as HTMLInputElement;
    return element.value;
  }
  get text(): string {
    const element = this.element.querySelector("#text")! as HTMLInputElement;
    return element.value;
  }
}
