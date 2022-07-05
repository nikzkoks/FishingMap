import DomElement from "../DomElement/DomElement";
import css from "./map.module.css";

export class Map {
  constructor() {
    this.element = new DomElement({
      type: "div",
      className: css.map,
      html: `
			`,
    }).element;
  }
}
