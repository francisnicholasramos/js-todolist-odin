import NewProject from "./NewProject";

export default class Crud {
  constructor() {
    this.storageDB = [];
  }

  addTodo(task) {
    this.storageDB.push(task);
  }

  debug() {
    return this.storageDB;
  }

  static fromJSON(data) {
    const instance = new Crud();

    const items = data?.storageDb ?? [];

    instance.storageDB = items.map((item) => {
      const project = new NewProject(item.name);

      project.id = item.id;

      return project;
    });

    return instance;
  }

  static instanteTest() {
    let instanceCreate;
    const storedData = localStorage.getItem("project");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      instanceCreate = Crud.fromJSON(parsedData);
    } else {
      instanceCreate = new Crud();
    }
  }

  static instanceOne() {
    return new Crud();
  }
}
