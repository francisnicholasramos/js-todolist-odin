import Project from "./Project";
import Todo from "./todo";
import CreateTodo from "./core";

export function renderProjects() {
  document.querySelectorAll('.projects').forEach(project => {
    const content = document.querySelector('.content');
    const projectbar = document.querySelector('.projectbar');
    const h2 = document.querySelector('.titleName');
    const addTodo = document.querySelector('.addTodo');

    project.addEventListener('click', () => {
      const retrieveProjects = CreateTodo.init().storageDb;
      const uniqueID = project.id;
      const currentProject = retrieveProjects.find(p => p.id === uniqueID);

      if (!currentProject) return;

      const existing = content.querySelector('.todos');
      if (existing) existing.remove();

      const list = document.createElement('div');
      list.classList.add('todos');
      list.style.display = 'block';

      listAllTasks(currentProject, list);

      h2.textContent = currentProject.name;
      projectbar.style.display = 'block';
      h2.style.display = 'block';
      addTodo.style.display = 'block';

      content.appendChild(list);
    });
  });
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

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevents form from reloading after submission

    const storage = CreateTodo.init();
    const inputTodo = document.querySelector('.addInput').value

    storage.addTodoList(new Project(inputTodo))
    storage.store();

    listAllProjects(); // re-render the dom for new added array
    form.reset(); // empty form for new entry
    location.reload() // reloads the page
  })
}

// getTheInputs
export function getTheInputs() {
  const task = document.querySelector('#task').value
  const date = document.querySelector('#date').value
  const option = document.querySelector('#option').value


  const activeProject = document.querySelector('.projects.active');
  const uid = activeProject ? activeProject.id : null;

  return {
    task,
    date,
    option,
    uid
  }
}

// addNewTask
export function addNewTask() {

  const newTaskForm = document.querySelector('.taskForm')
  const addBtn = document.querySelector('.addTodo')

  addBtn.addEventListener('click', () => {
    const hideForm = newTaskForm.style.display === 'none'
    newTaskForm.style.display = hideForm ? 'flex' : 'none';    

  })

  newTaskForm.addEventListener('submit', () => {

    const value = getTheInputs();
    const newTodo = new Todo(value.task, value.date, value.option)
    const savedWrapper = JSON.parse(localStorage.getItem('project'));
    const savedProjects = savedWrapper?.storageDb || [];

    const targetProject = savedProjects.find(p => p.id === value.uid);

    if (targetProject) {
      targetProject.todos.push(newTodo);
      localStorage.setItem('project', JSON.stringify({ storageDb: savedProjects }));
    }

    location.reload()
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

    element.addEventListener('click', () => {
      document.querySelectorAll('.projects').forEach(p => p.classList.remove('active'));
      element.classList.add('active');
    });


    element.appendChild(img)
    element.appendChild(span)
    projectsLists.appendChild(element)
  })

}

export function listAllTasks(project, container) {
  const saveProjects = (updatedProject) => {
    const allProjects = CreateTodo.init().storageDb;
    const updatedProjects = allProjects.map(p =>
      p.id === updatedProject.id ? updatedProject : null
    );
    localStorage.setItem('project', JSON.stringify(updatedProjects)); 
  };

  project.todos.forEach(todo => {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('todoContainer');

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    const date = document.createElement('input');
    const del = document.createElement('button');

    div1.classList.add('div1');
    div2.classList.add('div2');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.checked = todo.status
    span.classList.add('taskName');
    span.textContent = todo.task;
    date.type = 'date';
    date.value = todo.dueDate || '';
    del.innerHTML = `&#x2716`;
    del.classList.add('del');

    checkbox.addEventListener('change', () => {
      todo.status = checkbox.checked
      saveProjects(project)
    })

    div1.appendChild(checkbox);
    div1.appendChild(span);
    div2.appendChild(date);
    div2.appendChild(del);
    containerDiv.appendChild(div1);
    containerDiv.appendChild(div2);

    container.appendChild(containerDiv);
  });
}






