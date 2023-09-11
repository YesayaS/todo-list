class Task {
  constructor(
    title = "task title",
    description = "desc",
    dueDate = "due",
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
    const taskCard = document.createElement("button");
    taskCard.classList.add("task-card");
    taskCard.dataset.taskIndex = i;
    taskCard.textContent = task.title;

    taskCardContainer.appendChild(taskCard);
    return taskCard;
  }
}

class TaskList {
  constructor(tasks = []) {
    this.tasks = tasks;

    // create template task
    // this.add();
  }

  add(taskDetail) {
    const task = new Task(taskDetail);
    this.tasks.push(task);
  }

  load(taskDetail) {
    const [title, description, dueDate, isImportant] = taskDetail;
    console.log(taskDetail);
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
