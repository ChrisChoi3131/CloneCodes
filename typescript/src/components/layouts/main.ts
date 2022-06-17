import { NoteComponent } from "../cards/items/note.js";
import { TodoComponent } from "../cards/items/todo.js";
import { VideoComponent } from "../cards/items/video.js";
import { BaseComponent } from "../common/conponents.js";
import { CardsComponent, CardItemComponent } from "./../cards/cards.js";
import { ImageComponent } from "./../cards/items/image.js";
import { event } from "../common/eventEmitter.js";

export class Main extends BaseComponent<HTMLElement> {
  private readonly cards: CardsComponent;
  private readonly main: HTMLElement;
  constructor() {
    super(
      `
        <main class="document"></main>
      `
    );
    this.cards = new CardsComponent(CardItemComponent);
    this.cards.attachTo(this.element);
    event.subscribe("makeImageCard", (title, url) => {
      const image = new ImageComponent(title, url);
      this.cards.addChild(image);
    });
    //"https://picsum.photos/600/300"
    // image.attachTo(this.main, "beforeend");
    // const note = new NoteComponent(
    //   "title~~",
    //   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure commodi aliquam, eligendi molestiae aperiam corrupti architecto beatae distinctio a pariatur fugit unde maxime non sed quas eaque modi voluptates ipsam!"
    // );
    // note.attachTo(this.main);
    // const todo = new TodoComponent("일합시다 !!!", "123123131231");
    // todo.attachTo(this.main);
    // const video = new VideoComponent("video title!!!", "https://www.youtube.com/embed/GWdm1Ln9KRs");
    // video.attachTo(this.main);
  }
}
