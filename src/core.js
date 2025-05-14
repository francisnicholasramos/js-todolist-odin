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

  // static fromJSON(data) {
  //   const instance = new CreateTodo();
  //   instance.storageDb = data.storageDb.map(item => {
  //     const project = new Project(item.name);
  //     project.id = item.id
  //     return project;
  //   })
  //   return instance;
  // }
}

// let instanceCreate;

// const storedData = localStorage.getItem('project');
// if (storedData) {
//   const parsedData = JSON.parse(storedData);
//   instanceCreate = CreateTodo.fromJSON(parsedData);
// } else {
//   instanceCreate = new CreateTodo();
// }



// export { CreateTodo, instanceCreate, Project }
