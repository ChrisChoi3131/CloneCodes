import { Header } from "./components/layouts/header.js";
import { Main } from "./components/layouts/main.js";
import { Footer } from "./components/layouts/footer.js";
class App {
  private readonly header: Header;
  private readonly main: Main;
  private readonly footer: Footer;
  constructor(appRoot: HTMLElement) {
    this.header = new Header("Card Drag & Drop");
    this.main = new Main();
    this.footer = new Footer();
    this.header.attachTo(appRoot, "beforeend");
    this.main.attachTo(appRoot, "beforeend");
    this.footer.attachTo(appRoot, "beforeend");
  }
}
new App(document.querySelector("#app")! as HTMLElement);
