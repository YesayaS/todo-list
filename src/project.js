import { Task, TaskList } from "./tasks";
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
      console.log("hello1");
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
      console.log("hello2");
      this.updateCache();
    }
  }

  addProject() {
    const project = new Project();
    this.projects.push(project);
    this.updateCache();
    console.clear();
    console.log(this.projects);
  }

  deleteProject(projectIndex) {
    this.projects.splice(projectIndex, 1);
    this.updateCache();
  }

  renameProject(newName, projectIndex) {
    this.projects[projectIndex].rename(newName);
    this.updateCache();
    console.clear();
    console.log(this.projects);
  }

  getAllProjects() {
    return this.projects;
  }

  addTask(projectIndex) {
    this.projects[projectIndex].addTask();
    this.updateCache();
    console.log(this.projects);
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

    // create template project
    // this.projectList.addProject();
    // this.renderProjects();
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
        // taskEditorCard.textContent = "Edit Task";

        const taskEditorHead = document.createElement("div");
        taskEditorHead.classList.add("task-editor__head");

        const taskTitle = document.createElement("input");
        taskTitle.value = task.title;

        const deleteTaskButton = document.createElement("button");
        deleteTaskButton.classList.add("delete-task__button");
        deleteTaskButton.textContent = "Delete Task";

        taskEditorHead.appendChild(taskTitle);
        taskEditorHead.appendChild(deleteTaskButton);

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

        taskEditorCard.appendChild(taskEditorHead);
        taskEditorCard.appendChild(taskDescription);
        taskEditorCard.appendChild(taskDueDate);
        taskEditorCard.appendChild(isImportant);
        taskEditorCard.appendChild(saveButton);

        taskEditor.appendChild(taskEditorCard);

        document.body.insertAdjacentElement("afterbegin", taskEditor);

        document.querySelectorAll(".delete-task__button").forEach((button) => {
          button.addEventListener("click", (e) => {
            this.projectList.deleteTask(projectIndex, taskIndex);
            taskEditor.remove();
            this.renderProjects();
          });
        });

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
