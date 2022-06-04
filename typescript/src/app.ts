import { PageComponent } from "./components/page.js";
import { ImageComponent } from "./components/items/image.js";

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
    const image = new ImageComponent("test image", "https://picsum.photos/600/300");
    image.attachTo(appRoot, "beforeend");
  }
}
new App(document.querySelector(".document")! as HTMLElement);
