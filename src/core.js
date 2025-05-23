import Project from './Project'

export default class CreateTodo {
  constructor() {
    this.storageDb = [];
  }

  static init() {
    const storedData = localStorage.getItem('project');

    if (storedData) {
      const parsed = JSON.parse(storedData);
      const instance = new CreateTodo();

      const projects = parsed.storageDb ?? []; // storageDb ?? NOT null return VALUE else empty array

      instance.storageDb = projects.map(item => {
        const project = new Project(item.name);
        project.id = item.id;
        project.todos = item.todos;
        return project;
      })
      return instance; // for return saved data 
    }

    return new CreateTodo(); // for empty localStorage
  }

  addTodoList(todo) {
    this.storageDb.push(todo);
  }

  store() {
    localStorage.setItem('project', JSON.stringify(this));
  }
}


