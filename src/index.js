import "./style.css";
import { ProjectApp } from "./project";

// Usage
// const mainContainer = document.getElementById("mainContainer");
// const projectApp = new ProjectApp(mainContainer);
// projectApp.renderProjects();

addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.querySelector(".main-container");
  const projectApp = new ProjectApp(mainContainer);
  projectApp.renderProjects();
});
