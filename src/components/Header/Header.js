import DomElement from "../DomElement/DomElement";
import css from "./header.module.css";
// import switchUserMenu from './menu';
// import addList from './addList';

export class Header {
  constructor() {
    this.element = new DomElement({
      type: "header",
      className: css.header,
      html: `<div class="${css.title}">
      <span>Fishing Map Awesome</span>
      </div>
      <div class="${css.logo}"></div>
</div>
	<ul class="${css["header-menu"]}">
		<li class="${css["header-menu_item"]}">Home</li>
        <li class="${css["header-menu_item"]}">Map</li>
        <li class="${css["header-menu_item"]}">Top-10</li>
        <li class="${css["header-menu_item"]}">News</li>
        <li class="${css["header-menu_item"]}">Market</li>
    </ul>
<div class="${css.user}">

	<div class="${css["user-menu"]}">
		<div class="${css["user-menu__avatar"]}"></div>
		<div class="${css["user-menu__dropdown"]}"></div>
	</div>
</div> 
			`,
    }).element;
  }
  //   switchUserMenu() {
  //     const userMenu = document.querySelector(`.${css['user-menu']}`);
  //     userMenu.addEventListener('click', switchUserMenu, true);
  //   }
  //   addList() {
  //     const addListButton = document.querySelector(`.${css.user__button}`);
  //     addListButton.addEventListener('click', addList);
  //   }
}
