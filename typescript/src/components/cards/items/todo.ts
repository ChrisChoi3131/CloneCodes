import { BaseComponent } from "../../common/conponents.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, content: string, value?: string) {
    super(`
      <section class="todo">
          <h2 class="todo__title"></h2>
          <input type="checkbox" class="todo__checkbox" name="todo__checkbox">
          <label class="todo__labelCheckbox" for="todo__checkbox"></label>          
      </section>    
    `);
    const titleElement = this.element.querySelector(".todo__title") as HTMLHeadingElement;
    titleElement.textContent = title;
    const checkboxElement = this.element.querySelector(".todo__checkbox") as HTMLInputElement;
    const labelElement = this.element.querySelector(".todo__labelCheckbox") as HTMLLabelElement;
    labelElement.textContent = content;
    checkboxElement.value = value;
  }
}
