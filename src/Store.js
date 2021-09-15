export default class Store {
  constructor(name) {
    this.name = name;
  }
  storeDates(tasks = []) {
    localStorage.setItem(`${this.name}-dates`, JSON.stringify(tasks));
  }
  storeTasks(dates = []) {
    localStorage.setItem(`${this.name}-tasks`, JSON.stringify(dates));
  }
  getTasks() {
    return JSON.parse(localStorage.getItem(`${this.name}-tasks`) || "[]");
  }
  getDates() {
    return JSON.parse(localStorage.getItem(`${this.name}-dates`) || "[]");
  }
}
