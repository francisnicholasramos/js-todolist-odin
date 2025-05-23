class Todo {
  constructor(task, dueDate, priority) {
    this.id = crypto.randomUUID()
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
