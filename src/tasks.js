import deleteIcon from "./assets/delete.png";
import { format } from "date-fns";

class Task {
  constructor(
    title = "Task Title",
    description = "",
    dueDate = format(new Date(), "yyyy-MM-dd"),
    isImportant = true
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isImportant = isImportant;
  }
}

class TaskCard {
  create(taskCardContainer, task, i) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    const taskCardButton = document.createElement("button");
    taskCardButton.classList.add("task-card__button");
    taskCardButton.dataset.taskIndex = i;

    const taskCardTitle = document.createElement("div");
    taskCardTitle.classList.add("task-card__title");
    taskCardTitle.textContent = task.title;

    const taskCardDue = document.createElement("div");
    taskCardDue.classList.add("task-card__due");
    const dueDate = task.dueDate.toString().split("-");
    const formatDueDate = `Due : ${dueDate[2]}-${dueDate[1]}-${dueDate[0]}`;
    taskCardDue.textContent = formatDueDate;

    taskCardButton.appendChild(taskCardTitle);
    taskCardButton.appendChild(taskCardDue);

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.classList.add("delete-task__button");
    const deleteButtonIcon = document.createElement("img");
    deleteButtonIcon.src = deleteIcon;
    deleteTaskButton.appendChild(deleteButtonIcon);

    taskCard.appendChild(taskCardButton);
    taskCard.appendChild(deleteTaskButton);
    taskCardContainer.appendChild(taskCard);
  }
}

class TaskList {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  add(taskDetail) {
    const task = new Task(taskDetail);
    this.tasks.push(task);
  }

  load(taskDetail) {
    const [title, description, dueDate, isImportant] = taskDetail;
    const task = new Task(title, description, dueDate, isImportant);
    this.tasks.push(task);
  }

  delete(taskIndex) {
    this.tasks.splice(taskIndex, 1);
  }

  getAllTasks() {
    return this.tasks;
  }

  getTask(index) {
    return this.tasks[index];
  }

  edit(index, task) {
    this.tasks[index] = task;
  }

  renderCard() {
    const taskCardContainer = document.createElement("div");
    taskCardContainer.classList.add("task-container");

    this.tasks.forEach((task, i) => {
      new TaskCard().create(taskCardContainer, task, i);
    });
    return taskCardContainer;
  }
}

export { Task, TaskList };
