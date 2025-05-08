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
    this.storageDb.push(todo)
  }
}

const test1 = new CreateTodo();

test1.addTodoList(new Todo('OOP', 'study SOLID design pattern principles', new Date, 'high', false))

console.log(test1)

