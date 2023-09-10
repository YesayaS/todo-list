import "./style.css";
import { renderProject } from "./project";

const mainContainer = document.querySelector(".main-container");
// const sectionList = new SectionList();

addEventListener("DOMContentLoaded", () => {
  renderProject(mainContainer);
});
