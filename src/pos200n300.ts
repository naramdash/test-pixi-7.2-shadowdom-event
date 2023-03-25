import { Graphics } from "pixi.js";

export function makePos200n300() {
  const pos200n300 = new Graphics();
  pos200n300.beginFill("blue");
  pos200n300.drawRect(200, 300, 100, 100);
  pos200n300.endFill();

  pos200n300.eventMode = "static";
  pos200n300.addEventListener("mousemove", () => {
    pos200n300.clear();
    pos200n300.beginFill("black");
    pos200n300.drawRect(200, 300, 100, 100);
    pos200n300.endFill();
  });
  pos200n300.addEventListener("mouseleave", () => {
    pos200n300.clear();
    pos200n300.beginFill("blue");
    pos200n300.drawRect(200, 300, 100, 100);
    pos200n300.endFill();
  });

  return pos200n300;
}
