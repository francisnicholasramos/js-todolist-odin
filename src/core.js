class Todo {
  constructor(title, description, dueDate, priority, status) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
  }
}

class CreateTodo {
  constructor() {
    this.storageDb = [];
  }

  addTodoList(todo) {
    this.storageDb.push(todo);
  }
}


export { Todo, CreateTodo }
