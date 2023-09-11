import "./style.css";
import { ProjectApp } from "./project";
import { storage } from "./storage";

// localStorage.clear();

addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.querySelector(".main-container");
  const projectApp = new ProjectApp(mainContainer);
  projectApp.renderProjects();
});
