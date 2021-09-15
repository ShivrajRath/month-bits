import CONSTANTS from "./CONSTANTS";
import Date from "./models/Date.model";
import Task from "./models/Task.model";
import Utils from "./Utils";

export default class Collection {
  #tasks;
  #dates;
  constructor(store) {
    this.store = store;
    this.#tasks = [];
    this.#dates = [];
    const tasks = store.getTasks();
    const dates = store.getDates();
    this.createTaskModels(tasks);
    this.createDateModels(dates);
  }

  createTaskModels = (tasks) => {
    for (let { name, color } of tasks) {
      const task = new Task(name);
      task.setColor(color);
      this.#tasks.push(task);
    }
  };

  createDateModels = (dates) => {
    // creates 31 days model
    if (Utils.isEmpty(dates)) {
      let days = 31;
      while (days > 0) {
        this.#dates.push(new Date());
        days--;
      }
    } else {
      for (let date of dates) {
        this.#dates.push(new Date(date));
      }
    }
  };

  getDates = () => this.#dates;
  getTasks = () => this.#tasks;

  getDate = (day) => this.getDates().filter((date) => date.day === day)[0];

  addTask = (name) => this.#tasks.push(new Task(name));

  storeDates = () => this.store.storeDates(this.#dates);

  storeTasks = () => this.store.storeTasks(this.#tasks);
}
