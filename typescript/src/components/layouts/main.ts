import { NoteComponent } from "../cards/items/note.js";
import { TodoComponent } from "../cards/items/todo.js";
import { VideoComponent } from "../cards/items/video.js";
import { CardsComponent, CardItemComponent } from "./../cards/cards.js";
import { ImageComponent } from "./../cards/items/image.js";

export class Main {
  private readonly cards: CardsComponent;
  private readonly main: HTMLElement;
  constructor() {
    this.main = document.querySelector(".document")!;
    this.cards = new CardsComponent(CardItemComponent);
    this.cards.attachTo(this.main);
    const image = new ImageComponent("TEST Image", "https://picsum.photos/600/300");
    // const image1 = new ImageComponent("TEST Image", "https://picsum.photos/600/300");
    this.cards.addChild(image);
    // this.cards.addChild(image);
    // this.cards.addChild(image);
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
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.main);
  }
}
