import { instanceCreate, Project } from './core.js'

function openForm() {
  const addBtn = document.querySelector('button')
  const input = document.querySelector('.addInput')

  addBtn.addEventListener('click', () => {
    const hide = input.style.display === 'none' || input.style.display === '';
    input.style.display = hide ? 'block' : 'none';
  })
}

const addNewList = () => {
  const form = document.querySelector("form");
  const projects = document.querySelector('.projects')

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevents form from reloading after submission
    const inputTodo = document.querySelector('.addInput').value

    instanceCreate.addTodoList(new Project(inputTodo))

    localStorage.setItem('project', JSON.stringify(instanceCreate))

    console.log(`Log`, instanceCreate.storageDb)
    form.reset(); // empty form for new entry
  })
}

export { openForm, addNewList }


