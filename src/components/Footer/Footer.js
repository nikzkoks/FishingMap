import DomElement from "../DomElement/DomElement";
import css from "./footer.module.css";

export class Footer {
  constructor() {
    this.element = new DomElement({
      type: "footer",
      className: css.footer,
      html: `<div class="${css.title}">
      <span>Fishing Map Awesome</span>
      </div>
      <div class="${css.logo}"></div>`,
    }).element;
  }
}
