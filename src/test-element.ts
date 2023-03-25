import { Application } from "pixi.js";
import { makePos100n100 } from "./pos100n100";
import { makePos200n300 } from "./pos200n300";

const width = 500;
const height = 400;

class TestElement extends HTMLElement {
  #shadowRoot = this.attachShadow({ mode: "closed" });
  #pixiApp = new Application({
    width,
    height,
    backgroundColor: "yellowgreen",
  });

  constructor() {
    super();
    this.#shadowRoot.adoptedStyleSheets = [styleSheet];
    this.#shadowRoot.append(this.#pixiApp.view as HTMLCanvasElement);
  }

  connectedCallback() {
    const pos100n100 = makePos100n100();
    const pos200n300 = makePos200n300();

    this.#pixiApp.stage.addChild(pos100n100);
    this.#pixiApp.stage.addChild(pos200n300);
  }
}

const styleSheet = new CSSStyleSheet();
styleSheet.insertRule(`
  :host {
    display: block;
    margin: 0;
    width: ${width}px;
    height: ${height}px;
    border: 2px solid black;
  }
`);

customElements.define("test-element", TestElement);
export {};
