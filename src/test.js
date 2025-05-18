import CreateTodo from "./core";
import Project from "./Project";
import { listAllProjects } from "./list";
import Project2 from "./Project2";

const instanceCreate = CreateTodo.init();

function openForm() {
  const addBtn = document.querySelector('button')
  const input = document.querySelector('.addInput')
  const submit = document.querySelector('.submit')

  addBtn.addEventListener('click', () => {
    const hide = input.style.display === 'none' || input.style.display === '';
    input.style.display = hide ? 'block' : 'none';
    submit.style.display = hide ? 'block' : 'none';
  })
}

function addNewProject() {
  const form = document.querySelector("form");

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevents form from reloading after submission

    const inputTodo = document.querySelector('.addInput').value

    console.log(new Project2(inputTodo))

    form.reset(); // empty form for new entry
  })
}


export { openForm, addNewProject }


// function addNewProject() {
//   const form = document.querySelector("form");
//
//   form.addEventListener('submit', (e) => {
//     e.preventDefault(); // prevents form from reloading after submission
//
//     const inputTodo = document.querySelector('.addInput').value
//
//     instanceCreate.addTodoList(new Project(inputTodo))
//     instanceCreate.store();
//
//     listAllProjects();
//     console.log(instanceCreate.storageDb);
//     form.reset(); // empty form for new entry
//   })
// }
