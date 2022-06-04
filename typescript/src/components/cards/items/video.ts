import { BaseComponent } from "../../common/conponents.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(
      `
      <section class="video">
        <div>
          <iframe
            class= "video__content"
            width="560"
            height="315"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <h3 class="video__title"></h3>
      </section>
    `
    );
    // https://youtu.be/Gasgvx3GQ-E
    // https://www.youtube.com/watch?v=Gasgvx3GQ-E
    // https://www.youtube.com/embed/Gasgvx3GQ-E
    // => https://www.youtube.com/embed/Gasgvx3GQ-E
    const iframeElement = this.element.querySelector(".video__content") as HTMLIFrameElement;
    iframeElement.src = this.converToEmbedURL(url);
    const titleElement = this.element.querySelector(".video__title") as HTMLVideoElement;
    titleElement.textContent = title;
  }
  private converToEmbedURL(url: string): string {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) return `https://www.youtube.com/embed/${videoId}`;
  }
}
