class Task {
  constructor(title, description, dueDate, isImportant) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isImportant = isImportant;
  }
}

class TaskCard {
  create(title, dueDate, isImportant) {
    const card = document.createElement("button");
    card.classList.add("task-card");
    card.textContent = title + " " + dueDate;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
    this.add();
  }

  add() {
    const task = new Task("task title", "desc", "due", true);
    this.tasks.push(task);
  }

  getAllTasks() {
    return this.tasks;
  }

  renderCard() {
    const taskCardContainer = document.createElement("div");
    taskCardContainer.classList.add("task-container");

    this.tasks.forEach((task) => {
      const taskCard = document.createElement("button");
      taskCard.classList.add("task-card");
      taskCard.textContent = task.title;
      taskCardContainer.appendChild(taskCard);
    });
    return taskCardContainer;
  }
}

class TaskManager {
  constructor() {
    this.taskList = new TaskList();
    this.taskCard = new TaskCard();

    this.taskList.add();
  }

  addTask() {}

  renderCard() {
    const taskCardContainer = document.createElement("div");
    taskCardContainer.classList.add("task-container");

    this.taskList.getAllTasks().forEach((task) => {
      const taskCard = document.createElement("button");
      taskCard.classList.add("task-card");
      taskCard.textContent = task.title;
      taskCardContainer.appendChild(taskCard);
    });
    return taskCardContainer;
  }
}

export { TaskList, TaskManager };
