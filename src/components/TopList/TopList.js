import DomElement from "../DomElement/DomElement";
import css from "./topList.module.css";

export class TopList {
  constructor() {
    this.element = new DomElement({
      type: "div",
      className: css["top-list"],
      html: `
			`,
    }).element;
  }
}
