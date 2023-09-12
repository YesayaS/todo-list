import { Task } from "./tasks";

class ButtonHandler {
  constructor(projectList, renderProjects) {
    this.projectList = projectList;
    this.renderProjects = renderProjects;
  }
  addProject() {
    document
      .querySelector(".add-project-card__button")
      .addEventListener("click", () => {
        this.projectList.addProject();
        this.renderProjects();
      });
  }

  renameProjectTitle() {
    document.querySelectorAll(".project-card__title").forEach((title) => {
      title.addEventListener("change", (e) => {
        const value = e.target.value;
        const index = e.target.closest(".project-card").dataset.projectIndex;
        this.projectList.renameProject(value, index);
      });
    });
  }

  deleteProject() {
    document
      .querySelectorAll(".project-card__delete-button")
      .forEach((button) => {
        button.addEventListener("click", (e) => {
          const index = e.target.closest(".project-card").dataset.projectIndex;
          this.projectList.deleteProject(index);
          this.renderProjects();
        });
      });
  }

  taskEditorLayout(e) {
    const projectIndex = e.target.closest(".project-card").dataset.projectIndex;
    const taskIndex = e.target.closest(".task-card__button").dataset.taskIndex;

    const task = this.projectList.getTask(projectIndex, taskIndex);

    const taskEditor = document.createElement("div");
    taskEditor.setAttribute("id", "task-editor");

    const taskEditorCard = document.createElement("form");
    taskEditorCard.setAttribute("id", "task-editor__form");
    taskEditorCard.setAttribute("name", "task-editor__form");

    const taskTitle = document.createElement("input");
    taskTitle.classList.add("task-editor__title");
    taskTitle.value = task.title;

    const taskDescription = document.createElement("textarea");
    taskDescription.placeholder = "Add more detail about the task.";
    taskDescription.value = task.description;

    const taskOtherDetail = document.createElement("div");
    taskOtherDetail.classList.add("task-editor__other-detail");

    const taskDueDateContainer = document.createElement("div");
    taskDueDateContainer.classList.add("task-due__container");

    const taskDueDateLabel = document.createElement("div");
    taskDueDateLabel.textContent = "Due Date";

    const taskDueDate = document.createElement("input");
    taskDueDate.type = "date";
    taskDueDate.value = task.dueDate;

    taskDueDateContainer.appendChild(taskDueDateLabel);
    taskDueDateContainer.appendChild(taskDueDate);

    const isImportantContainer = document.createElement("div");
    isImportantContainer.classList.add("is-important__container");

    const isImportant = document.createElement("input");
    isImportant.classList.add("is-important");
    isImportant.type = "checkbox";
    isImportant.checked = task.isImportant;

    const isImportantLabel = document.createElement("label");
    isImportantLabel.textContent = "Important";

    isImportantContainer.appendChild(isImportant);
    isImportantContainer.appendChild(isImportantLabel);

    taskOtherDetail.appendChild(taskDueDateContainer);
    taskOtherDetail.appendChild(isImportantContainer);

    const saveButton = document.createElement("button");
    saveButton.classList.add("save-task__button");
    saveButton.textContent = "save";
    saveButton.setAttribute("form", "task-editor__form");
    saveButton.type = "submit";

    taskEditorCard.appendChild(taskTitle);
    taskEditorCard.appendChild(taskDescription);
    taskEditorCard.appendChild(taskOtherDetail);
    taskEditorCard.appendChild(saveButton);

    taskEditor.appendChild(taskEditorCard);

    document.body.insertAdjacentElement("afterbegin", taskEditor);

    const taskDetailElement = [
      taskTitle,
      taskDescription,
      taskDueDate,
      isImportant,
    ];

    return [
      taskDetailElement,
      projectIndex,
      taskIndex,
      taskEditorCard,
      taskEditor,
    ];
  }

  editTask() {
    document.querySelectorAll(".task-card__button").forEach((button) => {
      button.addEventListener("click", (e) => {
        const [
          taskDetailElement,
          projectIndex,
          taskIndex,
          taskEditorCard,
          taskEditor,
        ] = this.taskEditorLayout(e);

        taskEditorCard.addEventListener("submit", (e) => {
          e.preventDefault;

          const [taskTitle, taskDescription, taskDueDate, isImportant] =
            taskDetailElement;

          const newTask = new Task(
            taskTitle.value,
            taskDescription.value,
            taskDueDate.value,
            isImportant.checked
          );

          this.projectList.editTask(projectIndex, taskIndex, newTask);
          taskEditor.remove();
          this.renderProjects();
        });
      });
    });
  }

  deleteTask() {
    document.querySelectorAll(".delete-task__button").forEach((button) => {
      button.addEventListener("click", (e) => {
        const projectIndex =
          e.target.closest(".project-card").dataset.projectIndex;
        const taskIndex = e.target.dataset.taskIndex;
        this.projectList.deleteTask(projectIndex, taskIndex);
        this.renderProjects();
      });
    });
  }

  addTask() {
    document.querySelectorAll(".project-card__add-task").forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = e.target.closest(".project-card").dataset.projectIndex;
        this.projectList.addTask(index);
        this.renderProjects();
      });
    });
  }
}

function handleButton(projectList, renderProjects) {
  const buttonHandler = new ButtonHandler(projectList, renderProjects);

  buttonHandler.addProject();
  buttonHandler.renameProjectTitle();
  buttonHandler.deleteProject();
  buttonHandler.editTask();
  buttonHandler.deleteTask();
  buttonHandler.addTask();
}

export { handleButton };
