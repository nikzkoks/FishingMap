import DomElement from '../DomElement/DomElement';
import css from './sidebar.module.css';

export class Sidebar {
  constructor() {
    this.element = new DomElement({
      type: 'article',
      className: css.sidebar,
      html: `
	<ul class="${css['sidebar-menu']}">
    <li class="${css['sidebar-menu_item']} ${css['btn-map']}">Map</li>
    <li class="${css['sidebar-menu_item']} ${css['btn-top_list']}">Top-10</li>
    <li class="${css['sidebar-menu_item']}">News</li>
    <li class="${css['sidebar-menu_item']}">Market</li>
    <li class="${css['sidebar-menu_item']}">Map</li>
    <li class="${css['sidebar-menu_item']}">Top-10</li>
    <li class="${css['sidebar-menu_item']}">News</li>
    <li class="${css['sidebar-menu_item']}">Market</li>
  </ul>
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
