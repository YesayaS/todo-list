import "./style.css";
import { ProjectApp } from "./project";

addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.querySelector(".main-container");
  const projectApp = new ProjectApp(mainContainer);
  projectApp.renderProjects();
});
