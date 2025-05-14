export default class NewProject {
  constructor(name) {
    this.id = crypto.randomUUID();
    this.name = name;
  }
}
