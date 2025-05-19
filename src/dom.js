import Project from "./Project";
import CreateTodo from "./core";

export function renderTodos() {
  const retrieveProjects = CreateTodo.init().storageDb;

  retrieveProjects.forEach(project => {
    const container = document.querySelector('.content')

    // light blue navbar
    const projectbar = document.createElement('div');
    projectbar.classList.add('projectbar')

    // title of project
    const h2 = document.createElement('h2')
    h2.textContent = `${project.name}`;

    // append navbar
    projectbar.appendChild(h2);
    container.appendChild(projectbar)
  })
} 



export function test() {
  document.querySelectorAll('.projects').forEach(project => {
    const projectbar = document.querySelector('.projectbar')
    project.addEventListener('click', () => {
      const retrieveProjects = CreateTodo.init().storageDb;
      const hidden = projectbar.style.display === 'block';
      projectbar.style.display = hidden ? 'block' : 'none';

      const uniqueID = project.id; // get the id 
      const currentProject = retrieveProjects.find(p => p.id === uniqueID)

      if (currentProject) {
        projectbar.textContent = currentProject.name
      }
    })
  })
}

// openForm
export function openForm() {
  const addBtn = document.querySelector('button')
  const input = document.querySelector('.addInput')
  const submit = document.querySelector('.submit')

  addBtn.addEventListener('click', () => {
    const hide = input.style.display === 'none' || input.style.display === '';
    input.style.display = hide ? 'block' : 'none';
    submit.style.display = hide ? 'block' : 'none';
  })
} 

// addNewProject
export function addNewProject() {
  const form = document.querySelector("form");

  const storage = CreateTodo.init();

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevents form from reloading after submission

    const inputTodo = document.querySelector('.addInput').value

    storage.addTodoList(new Project(inputTodo))
    storage.store();

    listAllProjects(); // re-render the dom for new added array
    form.reset(); // empty form for new entry
  })
}

// listAllProjects
export function listAllProjects() {
  const arr = CreateTodo.init().storageDb;
  const projectsLists = document.querySelector('.project-lists')
  projectsLists.innerHTML = ''

    const data = JSON.parse(localStorage.getItem('project'))
    const projects = data.storageDb ?? [];

    projects.forEach(item => {
      const element = document.createElement('div')
      const img = document.createElement('img')
      const span = document.createElement('span')

      img.src = '556a331802d10e8452d9.png'

      element.classList.add('projects')

      element.id = item.id;
      span.textContent = item.name


      element.appendChild(img)
      element.appendChild(span)
      projectsLists.appendChild(element)
    })

  console.log(arr)
}
