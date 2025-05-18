export function renderProjects(projects, projectTodos) {
  projectTodos.innerHTML = ''; // clear duplicates

  projects.forEach(project => {
    // Project name
    const projectBar = document.createElement('div')
    projectBar.classList.add('projectbar')
    const h2 = document.createElement('h2');

    h2.textContent = project.name
    const projectName = document.createElement('div');
    const img = document.createElement('img')
    const span = document.createElement('span')


    img.src = '556a331802d10e8452d9.png'
    projectName.classList.add('projects')

    const todoList = document.createElement('div')
    const checkBox = document.createElement('input')
    const removeTodo = document.createElement('button');
    project.todos.forEach(todo => {
      checkBox.type = 'checkbox'
      todoList.textContent = `${todo.title} ${todo.description} ${todo.dueDate} ${todo.priority}`

      removeTodo.textContent = 'X';
    })


    projectName.id = project.id
    span.textContent = project.name
    projectName.appendChild(img)
    projectName.appendChild(span)

    projectBar.appendChild(h2)

    projectTodos.appendChild(checkBox)
    projectTodos.appendChild(todoList)
    projectTodos.appendChild(removeTodo)
    projectTodos.appendChild(projectBar)
  })





} // END OF THE LINE

// export function createTaskForm(projects, projectTodos, app) {
//
// }
