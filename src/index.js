import {} from "./main.css";

import { App } from "./components/App/App";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Map } from "./components/Map/Map";
import cssMap from "./components/Map/map.module.css";
import cssTopList from "./components/TopList/topList.module.css";
import { TopList } from "./components/TopList/TopList";
import { Footer } from "./components/Footer/Footer";

const app = new App();
const header = new Header();
const main = new Main();
const sidebar = new Sidebar();
const map = new Map();
const topList = new TopList();
const footer = new Footer();

document.body.appendChild(app.element);

const fishingMap = app.element;
const mainContainer = main.element;

fishingMap.appendChild(header.element);

fishingMap.appendChild(mainContainer);
mainContainer.appendChild(sidebar.element);
mainContainer.appendChild(map.element);

fishingMap.appendChild(footer.element);

const btnMap = sidebar.element.children[0].children[0];
const btnTopList = sidebar.element.children[0].children[1];

btnMap.addEventListener("click", showMap);
btnTopList.addEventListener("click", showTopList);

function showMap() {
  const childNodeMain = mainContainer.lastChild;
  mainContainer.removeChild(childNodeMain);
  mainContainer.appendChild(map.element);
}

function showTopList() {
  const childNodeMain = mainContainer.lastChild;
  mainContainer.removeChild(childNodeMain);
  mainContainer.appendChild(topList.element);
}
