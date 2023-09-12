import { TaskList } from "./tasks";
import { handleButton } from "./buttonHandler";
import deleteIcon from "./assets/delete.png";

class Project {
  constructor(title = "New Project", taskList = new TaskList()) {
    this.title = title;
    this.taskList = taskList;
  }

  rename(projectTitle) {
    this.title = projectTitle;
  }

  addTask() {
    this.taskList.add();
  }

  deleteTask(taskIndex) {
    this.taskList.delete(taskIndex);
  }

  getTask(taskIndex) {
    return this.taskList.getTask(taskIndex);
  }

  editTask(taskIndex, task) {
    this.taskList.edit(taskIndex, task);
  }

  renderTaskCard() {
    return this.taskList.renderCard();
  }
}

class ProjectList {
  constructor() {
    this.projects = [];
    if (localStorage.getItem("projects")) {
      const projectList = JSON.parse(localStorage.getItem("projects"));
      projectList.forEach((storageProject) => {
        const project = new Project(storageProject.title);
        storageProject.taskList.tasks.forEach((storageTask) => {
          const task = [
            storageTask.title,
            storageTask.description,
            storageTask.dueDate,
            storageTask.isImportant,
          ];
          project.taskList.load(task);
        });
        this.projects.push(project);
      });
    } else {
      this.updateCache();
    }
  }

  addProject() {
    const project = new Project();
    this.projects.push(project);
    this.updateCache();
  }

  deleteProject(projectIndex) {
    this.projects.splice(projectIndex, 1);
    this.updateCache();
  }

  renameProject(newName, projectIndex) {
    this.projects[projectIndex].rename(newName);
    this.updateCache();
  }

  getAllProjects() {
    return this.projects;
  }

  addTask(projectIndex) {
    this.projects[projectIndex].addTask();
    this.updateCache();
  }

  deleteTask(projectIndex, taskIndex) {
    this.projects[projectIndex].deleteTask(taskIndex);
    this.updateCache();
  }

  getTask(projectIndex, taskIndex) {
    return this.projects[projectIndex].getTask(taskIndex);
  }

  editTask(projectIndex, taskIndex, task) {
    this.projects[projectIndex].editTask(taskIndex, task);
    this.updateCache();
  }

  getProjectTasks(projectIndex) {
    return this.projects[projectIndex].getTaskList();
  }

  updateCache() {
    localStorage.setItem("projects", JSON.stringify(this.projects));
  }
}

class ProjectCardRenderer {
  createProjectCard(project, i) {
    const card = document.createElement("div");
    card.className = "project-card";
    card.dataset.projectIndex = i;

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("project-card__header");

    const projectTitle = document.createElement("input");
    projectTitle.className = "project-card__title";
    projectTitle.value = project.title;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("project-card__delete-button");
    const deleteButtonIcon = document.createElement("img");
    deleteButtonIcon.src = deleteIcon;
    deleteButton.appendChild(deleteButtonIcon);

    cardHeader.appendChild(projectTitle);
    cardHeader.appendChild(deleteButton);

    const addTaskButton = document.createElement("button");
    addTaskButton.className = "task__add-button";
    addTaskButton.textContent = "+ Add Task";

    const tasksList = project.renderTaskCard();

    const addTaskDiv = document.createElement("div");
    addTaskDiv.className = "project-card__add-task";
    addTaskDiv.appendChild(addTaskButton);

    card.appendChild(cardHeader);
    card.appendChild(tasksList);
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
    handleButton(this.projectList, this.renderProjects.bind(this));
  }
}

export { ProjectApp };
