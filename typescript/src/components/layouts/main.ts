import { Component } from "./../common/conponents";
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
    event.subscribe("makeCard", (card) => {
      this.cards.addChild(card);
    });
    // ("https://picsum.photos/600/300");
    // image.attachTo(this.main, "beforeend");
    this.cards.addChild(new ImageComponent("Image Title", "https://picsum.photos/800/400"));
    this.cards.addChild(new ImageComponent("Image Title", "https://picsum.photos/800/400"));
    this.cards.addChild(new TodoComponent("일합시다 !!!", "123123131231"));
    this.cards.addChild(new ImageComponent("Image Title", "https://picsum.photos/800/400"));
    this.cards.addChild(new ImageComponent("Image Title", "https://picsum.photos/800/400"));
    this.cards.addChild(new ImageComponent("Image Title", "https://picsum.photos/800/400"));

    // const todo =
    // todo.attachTo(this.main);
    // const video = new VideoComponent("video title!!!", "https://www.youtube.com/embed/GWdm1Ln9KRs");
    // video.attachTo(this.main);
  }
}
