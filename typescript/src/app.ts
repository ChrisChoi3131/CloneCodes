import { Main } from "./components/layouts/main.js";
class App {
  private readonly main: Main;
  constructor(appRoot: HTMLElement) {
    this.main = new Main();
    this.main.attachTo(appRoot, "beforeend");
  }
}
new App(document.querySelector("#app")! as HTMLElement);
