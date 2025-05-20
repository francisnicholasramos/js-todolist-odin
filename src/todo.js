class Todo {
  constructor(task, dueDate, priority) {
    this.task = task;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = false;
  }

  toggleStatus() {
    this.status = !this.status;
    return this.status;
  }
}

export default Todo;
