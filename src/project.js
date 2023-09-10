class Project {
  constructor(title = "New Project") {
    this.title = title;
    this.taskList = [];
  }

  rename(title) {
    this.title = title;
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

  removeProject(project) {
    const index = this.projects.indexOf(project);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }

  renameProject(newName, projectIndex) {
    this.projects[projectIndex].rename(newName);
  }

  getAllProjects() {
    return this.projects;
  }
}

class ProjectCardRenderer {
  createProjectCard(projectTitle, i) {
    const card = document.createElement("div");
    card.className = "project-card";

    const titleButton = document.createElement("input");
    titleButton.className = "project-card__title";
    titleButton.value = projectTitle;
    titleButton.dataset.iProject = i;

    const addTaskButton = document.createElement("button");
    addTaskButton.className = "add-task__button";
    addTaskButton.textContent = "+ Add Task";

    const addTaskDiv = document.createElement("div");
    addTaskDiv.className = "project-card__add-task";
    addTaskDiv.appendChild(addTaskButton);

    card.appendChild(titleButton);
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

class EventHandler {}

class ProjectApp {
  constructor(mainContainer) {
    this.mainContainer = mainContainer;
    this.projectList = new ProjectList();
    this.projectCardRenderer = new ProjectCardRenderer(this.projectList);
  }

  renderProjects() {
    this.mainContainer.innerHTML = "";

    this.projectList.getAllProjects().forEach((project, i) => {
      const projectCard = this.projectCardRenderer.createProjectCard(
        project.title,
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
        this.projectList.renameProject(
          e.target.value,
          e.target.dataset.iProject
        );
      });
    });
  }
}

export { ProjectApp };
