class Project {
  constructor() {
    this.title = "New Project";
    this.taskList = [];
  }
}

const projectList = (() => {
  let projects = [];

  const add = () => {
    const project = new Project();
    projects.push(project);
  };

  const remove = () => {};

  const list = () => {
    return projects;
  };
  return { add, remove, list };
})();

class ProjectCard {
  create(projectTitle) {
    const card = `
    <div class="project-card">
      <button class="project-card__title">${projectTitle}</button>
      <div class="project-card__add-task">
        <button class="add-task__button">+ Add Task</button>
      </div>
    </div>`;
    return card;
  }

  createAddProjectCard() {
    const card = `
    <div class="add-project-card">
        <button class="add-project-card__button">+ Add Project</button>
    </div>`;
    return card;
  }
}

const renderProject = (mainContainer) => {
  mainContainer.innerHTML = "";

  projectList.list().forEach((project) => {
    mainContainer.innerHTML += new ProjectCard().create(project.title);
  });

  mainContainer.innerHTML += new ProjectCard().createAddProjectCard();

  mainContainer
    .querySelector(".add-project-card__button")
    .addEventListener("click", () => {
      projectList.add();
      renderProject(mainContainer);
    });
  return mainContainer;
};

export { renderProject };
