import { BaseComponent } from "../../common/conponents.js";
export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
      <section class="image">
        <div class="image__holder">
          <image class="image__thumbnail"></image>
        </div>
        <h2 class="image__title"></h2>
      </section>
      `);
    const imageElement = this.element.querySelector(".image__thumbnail")! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;
    const titleElement = this.element.querySelector(".image__title")! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}
