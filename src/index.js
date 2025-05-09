import { Todo, CreateTodo } from './core.js';
import './test.js';
import './css/styles.css';


const test1 = new CreateTodo();

test1.addTodoList(
  new Todo(
    "OOP",
    "study SOLID design pattern principles",
    new Date(),
    "high",
    false
  )
);

console.log(test1);
// console.log(test)
