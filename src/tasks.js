class Task {
  constructor(title, description, dueDate, isImportant) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isImportant = isImportant;
  }
}

class TaskCard {
  create(taskCardContainer, task, i) {
    const taskCard = document.createElement("button");
    taskCard.classList.add("task-card");
    taskCard.dataset.taskIndex = i;
    taskCard.textContent = task.title;
    taskCardContainer.appendChild(taskCard);

    return taskCard;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
    this.taskCard = new TaskCard();

    // create template task
    this.add();
  }

  add() {
    const task = new Task("task title", "desc", "due", true);
    this.tasks.push(task);
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
      this.taskCard.create(taskCardContainer, task, i);
    });
    return taskCardContainer;
  }
}

export { Task, TaskList };
