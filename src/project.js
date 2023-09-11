import { TaskList, TaskManager } from "./tasks";

class Project {
  constructor(title = "New Project") {
    this.title = title;
    this.taskList = new TaskList();
  }

  rename(title) {
    this.title = title;
  }

  addTask() {
    this.taskList.add();
  }

  renderTaskCard() {
    return this.taskList.renderCard();
  }
}

class ProjectList {
  constructor() {
    this.projects = [];
  }

  addProject() {
    const project = new Project();
    this.projects.push(project);
  }

  deleteProject(projectIndex) {
    this.projects.splice(projectIndex, 1);
  }

  renameProject(newName, projectIndex) {
    this.projects[projectIndex].rename(newName);
  }

  getAllProjects() {
    return this.projects;
  }

  addTask(index) {
    this.projects[index].addTask();
  }

  getProjectTasks(projectIndex) {
    return this.projects[projectIndex].getTaskList();
  }
}

class ProjectCardRenderer {
  createProjectCard(project, i) {
    const card = document.createElement("div");
    card.className = "project-card";
    card.dataset.cardIndex = i;

    const titleButton = document.createElement("input");
    titleButton.className = "project-card__title";
    titleButton.value = project.title;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("project-card__delete-button");
    deleteButton.textContent = "Delete Project";

    const tasksList = project.renderTaskCard();

    const addTaskButton = document.createElement("button");
    addTaskButton.className = "task__add-button";
    addTaskButton.textContent = "+ Add Task";

    const addTaskDiv = document.createElement("div");
    addTaskDiv.className = "project-card__add-task";
    addTaskDiv.appendChild(addTaskButton);

    card.appendChild(titleButton);
    card.appendChild(tasksList);
    card.appendChild(deleteButton);
    card.appendChild(addTaskDiv);

    return card;
  }

  createAddProjectCard() {
    const card = document.createElement("div");
    card.className = "add-project-card";

    const addButton = document.createElement("button");
    addButton.className = "add-project-card__button";
    addButton.textContent = "+ Add Project";

    card.appendChild(addButton);
    return card;
  }
}

class ProjectApp {
  constructor(mainContainer) {
    this.mainContainer = mainContainer;
    this.projectList = new ProjectList();
    this.projectCardRenderer = new ProjectCardRenderer();

    // create template project
    this.projectList.addProject();
    this.renderProjects();
  }

  renderProjects() {
    this.mainContainer.innerHTML = "";

    this.projectList.getAllProjects().forEach((project, i) => {
      const projectCard = this.projectCardRenderer.createProjectCard(
        project,
        i
      );
      this.mainContainer.appendChild(projectCard);
    });

    const addProjectCard = this.projectCardRenderer.createAddProjectCard();

    this.mainContainer.appendChild(addProjectCard);
    this.buttonHandler();
  }

  buttonHandler() {
    document
      .querySelector(".add-project-card__button")
      .addEventListener("click", () => {
        this.projectList.addProject();
        this.renderProjects();
      });

    document.querySelectorAll(".project-card__title").forEach((title) => {
      title.addEventListener("change", (e) => {
        const value = e.target.value;
        const index = e.target.closest(".project-card").dataset.cardIndex;
        this.projectList.renameProject(value, index);
      });
    });

    document
      .querySelectorAll(".project-card__delete-button")
      .forEach((button) => {
        button.addEventListener("click", (e) => {
          const index = e.target.closest(".project-card").dataset.cardIndex;
          this.projectList.deleteProject(index);
          this.renderProjects();
        });
      });

    document.querySelectorAll(".project-card__add-task").forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = e.target.closest(".project-card").dataset.cardIndex;
        this.projectList.addTask(index);
        this.renderProjects();
      });
    });
  }
}

export { ProjectApp };
