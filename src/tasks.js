class Task {
  constructor(title, description, dueDate, isImportant) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isImportant = isImportant;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
  }
  add() {
    const task = new Task();
    this.tasks.push(task);
  }
}

class TaskCard {
  create(title, dueDate, isImportant) {
    const card = document.createElement("button");
    card.classList.add("task-card");
    card.textContent = title + " " + dueDate;
  }
}
