import CreateTodo from "./core";

function listAllProjects() {
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



export { listAllProjects }
