class Todo {
  constructor(title, description, dueDate, priority, status) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
  }
}

class Project {
  constructor(name) {
    this.id = crypto.randomUUID()
    this.name = name;
  }
}

class CreateTodo {
  constructor() {
    this.storageDb = [];
  }

  addTodoList(todo) {
    this.storageDb.push(todo);
  }

  debug() {
    return this.storageDb;
  }
}

const instanceCreate = new CreateTodo();


export { instanceCreate, Project}
