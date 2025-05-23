import Project from "./Project";
import Todo from "./todo";
import CreateTodo from "./core";

export function renderProjects() {
  document.querySelectorAll('.projects').forEach(project => {
    const projectbar = document.querySelector('.projectbar')
    const h2 = document.querySelector('.titleName')
    const todos = document.querySelector('.todos')
    const addTodo = document.querySelector('.addTodo')
    project.addEventListener('click', () => {
      const retrieveProjects = CreateTodo.init().storageDb;

      projectbar.style.display = 'block';
      h2.style.display = 'block';
      // todos.style.display = 'flex'
      addTodo.style.display = 'block';

      const uniqueID = project.id; // get the id 
      const currentProject = retrieveProjects.find(p => p.id === uniqueID)

      if (currentProject) {
        h2.textContent = currentProject.name
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

// getTheInputs
export function getTheInputs() {
  const task = document.querySelector('#task').value
  const date = document.querySelector('#date').value
  const option = document.querySelector('#option').value


  const activeProject = document.querySelector('.projects');
  const uid = activeProject ? activeProject.id : null;

  return {
    task,
    date,
    option,
    uid
  }
}

// addNewTask
export function addNewTask(value) {
  const newTodo = new Todo(value.task, value.date, value.option)

  const newTaskForm = document.querySelector('.taskForm')
  const addBtn = document.querySelector('.addTodo')
  const cancelBtn = document.querySelector('.cancel')

  addBtn.addEventListener('click', () => {
    const hideForm = newTaskForm.style.display === 'none'
    newTaskForm.style.display = hideForm ? 'flex' : 'none';
  })

  cancelBtn.addEventListener('click', () => {
    const hideForm = newTaskForm.style.display === 'none'
    newTaskForm.style.display = hideForm ? 'flex' : 'none';
  })

  newTaskForm.addEventListener('submit', () => {
    const savedWrapper = JSON.parse(localStorage.getItem('project'));
    const savedProjects = savedWrapper?.storageDb || [];

    const targetProject = savedProjects.find(p => p.id === value.uid);
    
    if (targetProject) {
      targetProject.todos.push(newTodo);
      localStorage.setItem('project', JSON.stringify({storageDb: savedProjects}));
    }
  })

}

// listAllProjects
export function listAllProjects() {
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

}
