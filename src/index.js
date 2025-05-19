import { renderTodos, openForm, addNewProject, listAllProjects, test } from "./dom";
import CreateTodo from "./core";
import './css/styles.css'

openForm();
addNewProject();
listAllProjects();
test()


const arr = new CreateTodo()
arr.storageDb;

console.log(arr)
