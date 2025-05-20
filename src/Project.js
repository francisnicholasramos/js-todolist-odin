export default class Project {
  constructor(name) {
    this.id = crypto.randomUUID();
    this.name =  name;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo)
  }

  editTodo(todo) {
    console.log('edit')
  }

  deleteTodo(todo) {
    console.log('delete')
  }

  todoStorage() {
    return this.todos;
  }

}

// create a function that will take the inputs and will pass the
// parameter later in addTodo() method

