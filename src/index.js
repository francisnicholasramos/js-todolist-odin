import { instanceCreate } from './core.js'
import {addNewList, openForm} from './test.js';
import './css/styles.css';


openForm();
addNewList();

console.log(localStorage.getItem('project'))
