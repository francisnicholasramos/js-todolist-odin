export default class Project2 {
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

}

