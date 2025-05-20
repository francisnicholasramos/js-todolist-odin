import { openForm, addNewProject, listAllProjects, renderProjects, addNewTask, getTheInputs } from "./dom";
import CreateTodo from "./core";
import Project from "./Project";
import './css/styles.css'
import Todo from "./todo";  

openForm();
addNewProject();
listAllProjects();
renderProjects()
const inputData = getTheInputs();
addNewTask(inputData);
// const proj1 = new Project('Project 1')
// localStorage.setItem('test', JSON.stringify(proj1))
//
// const todoItem = new Todo('Javascript', 'is a trash pl', '2025-05-20', 'HIGH', false)
// const todoItem2 = new Todo('Python', 'a versatile pl', '2025-05-20', 'HIGH', false)
// proj1.addTodo(todoItem);
// proj1.addTodo(todoItem2);
//
// localStorage.setItem('test', JSON.stringify(proj1))
// localStorage.setItem('test', JSON.stringify(proj1))
