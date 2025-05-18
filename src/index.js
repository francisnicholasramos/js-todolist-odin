import { openForm, addNewProject } from "./test";
import { listAllProjects } from "./list";
import './css/styles.css'

import Project2 from "./Project2";
import Todo from "./todo";
import { renderProjects } from "./dom";

openForm();
addNewProject();
listAllProjects();


const arr = [];

const project1 = new Project2('First Project');
const project2 = new Project2('Second Project');
project1.addTodo(new Todo('EcmaScript', 'is a trash language', '2025-05-18', 'high'))



arr.push(project1);


const projectList = document.querySelector('.content')
renderProjects(arr, projectList)
console.log(`Arr`, arr)
