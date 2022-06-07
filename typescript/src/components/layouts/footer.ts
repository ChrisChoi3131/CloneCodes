import { BaseComponent } from "../common/conponents.js";

export class Footer extends BaseComponent<HTMLElement> {
  constructor() {
    super(`
    <footer id="footer" class="width-full position-fixed bottom-0 d-flex flex-justify-center flex-items-center">
      <h3>
        <script>
          document.write(new Date().getFullYear());
        </script>
        &copy; Copyright by Yongrak Choi. All right reserved
      </h3>
    </footer>
    `);
  }
}
