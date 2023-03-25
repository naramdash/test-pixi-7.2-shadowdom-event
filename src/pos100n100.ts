import { Graphics } from "pixi.js";

export function makePos100n100() {
  const pos100n100 = new Graphics();
  pos100n100.beginFill("red");
  pos100n100.drawCircle(100, 100, 50);
  pos100n100.endFill();

  pos100n100.eventMode = "static";
  pos100n100.addEventListener("mousemove", () => {
    pos100n100.clear();
    pos100n100.beginFill("blue");
    pos100n100.drawCircle(100, 100, 50);
    pos100n100.endFill();
  });
  pos100n100.addEventListener("mouseleave", () => {
    pos100n100.clear();
    pos100n100.beginFill("red");
    pos100n100.drawCircle(100, 100, 50);
    pos100n100.endFill();
  });

  return pos100n100;
}
