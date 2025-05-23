import { openForm, addNewProject, listAllProjects, renderProjects, addNewTask, getTheInputs} from "./dom";
import './css/styles.css'

openForm();
addNewProject();
listAllProjects();
renderProjects()
const inputData = getTheInputs();
addNewTask(inputData);

