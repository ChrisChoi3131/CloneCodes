import { ImageComponent } from "../cards/items/image.js";
import { NoteComponent } from "../cards/items/note.js";
import { TodoComponent } from "../cards/items/todo.js";
import { VideoComponent } from "../cards/items/video.js";
import { BaseComponent, Component } from "../common/conponents.js";
import { event } from "../common/eventEmitter.js";
import { InputDialog } from "../dialog/dialog.js";
import { MediaInput } from "../dialog/input/media-input.js";
import { TextInput } from "../dialog/input/text-input.js";
type InputComponentConstructor<T extends MediaInput | TextInput> = {
  new (): T;
};
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
            <button id="new-note" class="mr-2">Note</button>
          </li>
          <li>
            <button id="new-task">Task</button>
          </li>
        </ul>
      </header>      
    `);
    const headerTitle = this.element.querySelector(".header__title");
    headerTitle.textContent = title;
    this.bindElementToDialog<MediaInput>("#new-image", MediaInput, (input: MediaInput) => new ImageComponent(input.title, input.url));
    this.bindElementToDialog<MediaInput>("#new-video", MediaInput, (input: MediaInput) => new VideoComponent(input.title, input.url));
    this.bindElementToDialog<TextInput>("#new-note", TextInput, (input: TextInput) => new NoteComponent(input.title, input.text));
    this.bindElementToDialog<TextInput>("#new-task", TextInput, (input: TextInput) => new TodoComponent(input.title, input.text));
  }
  private bindElementToDialog<T extends MediaInput | TextInput>(selector: string, InputComponent: InputComponentConstructor<T>, makeCard: (input: T) => Component) {
    const element = this.element.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener("click", () => {
      const input = new InputComponent();
      const dialog = new InputDialog();
      dialog.addChild(input);
      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.element);
      });
      dialog.setOnSubmitListener(() => {
        const card = makeCard(input);
        event.emit("makeCard", card);
        dialog.removeFrom(this.element);
      });
      dialog.attachTo(this.element);
    });
  }
}
