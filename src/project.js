import { Task, TaskList } from "./tasks";

class Project {
  constructor(title = "New Project") {
    this.title = title;
    this.taskList = new TaskList();
  }

  rename(projectTitle) {
    this.title = projectTitle;
  }

  addTask() {
    this.taskList.add();
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

  addTask(projectIndex) {
    this.projects[projectIndex].addTask();
  }

  getTask(projectIndex, taskIndex) {
    return this.projects[projectIndex].getTask(taskIndex);
  }

  editTask(projectIndex, taskIndex, task) {
    this.projects[projectIndex].editTask(taskIndex, task);
  }

  getProjectTasks(projectIndex) {
    return this.projects[projectIndex].getTaskList();
  }
}

class ProjectCardRenderer {
  createProjectCard(project, i) {
    const card = document.createElement("div");
    card.className = "project-card";
    card.dataset.projectIndex = i;

    const titleButton = document.createElement("input");
    titleButton.className = "project-card__title";
    titleButton.value = project.title;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("project-card__delete-button");
    deleteButton.textContent = "Delete Project";

    const addTaskButton = document.createElement("button");
    addTaskButton.className = "task__add-button";
    addTaskButton.textContent = "+ Add Task";

    const tasksList = project.renderTaskCard();

    const addTaskDiv = document.createElement("div");
    addTaskDiv.className = "project-card__add-task";
    addTaskDiv.appendChild(addTaskButton);

    card.appendChild(titleButton);
    card.appendChild(deleteButton);
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
        const index = e.target.closest(".project-card").dataset.projectIndex;
        this.projectList.renameProject(value, index);
      });
    });

    document
      .querySelectorAll(".project-card__delete-button")
      .forEach((button) => {
        button.addEventListener("click", (e) => {
          const index = e.target.closest(".project-card").dataset.projectIndex;
          this.projectList.deleteProject(index);
          this.renderProjects();
        });
      });

    document.querySelectorAll(".task-card").forEach((button) => {
      button.addEventListener("click", (e) => {
        const projectIndex =
          e.target.closest(".project-card").dataset.projectIndex;
        const taskIndex = e.target.dataset.taskIndex;

        const task = this.projectList.getTask(projectIndex, taskIndex);

        const taskEditor = document.createElement("div");
        taskEditor.setAttribute("id", "task-editor");

        const taskEditorCard = document.createElement("form");
        taskEditorCard.setAttribute("id", "task-editor__form");
        taskEditorCard.setAttribute("name", "task-editor__form");
        taskEditorCard.textContent = "Edit Task";

        // title, description, dueDate, isImportant
        const taskTitle = document.createElement("input");
        taskTitle.value = task.title;

        const taskDescription = document.createElement("input");
        taskDescription.value = task.description;

        const taskDueDate = document.createElement("input");
        taskDueDate.value = task.dueDate;

        const isImportant = document.createElement("input");
        isImportant.value = task.isImportant;

        const saveButton = document.createElement("button");
        saveButton.textContent = "save";
        saveButton.setAttribute("form", "task-editor__form");
        saveButton.type = "submit";

        taskEditorCard.appendChild(taskTitle);
        taskEditorCard.appendChild(taskDescription);
        taskEditorCard.appendChild(taskDueDate);
        taskEditorCard.appendChild(isImportant);
        taskEditorCard.appendChild(saveButton);

        taskEditor.appendChild(taskEditorCard);

        document.body.insertAdjacentElement("afterbegin", taskEditor);

        taskEditorCard.addEventListener("submit", (e) => {
          e.preventDefault;
          const newTask = new Task(
            taskTitle.value,
            taskDescription.value,
            taskDueDate.value,
            isImportant.value
          );
          this.projectList.editTask(projectIndex, taskIndex, newTask);
          taskEditor.remove();
          this.renderProjects();
        });
      });
    });

    document.querySelectorAll(".project-card__add-task").forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = e.target.closest(".project-card").dataset.projectIndex;
        this.projectList.addTask(index);
        this.renderProjects();
      });
    });
  }
}

export { ProjectApp };
