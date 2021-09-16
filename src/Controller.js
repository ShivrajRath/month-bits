import Utils from "./Utils";

export default class Controller {
  constructor(view, collection) {
    this.view = view;
    this.collection = collection;
    this.render();
    this.initOneTimeListeners();
  }

  initOneTimeListeners() {
    this.initAddTaskListener();
    this.initClearListener();
    this.initResetListener();
  }

  initListeners() {
    this.initDateTaskClickListener();
    this.initDeleteTaskListener();
  }

  initAddTaskListener() {
    const target = Utils.qs("#add-a-task");
    const textBox = Utils.qs("#add-a-task-input");

    const handler = (e) => {
      e.preventDefault();
      this.collection.addTask(textBox.value);
      textBox.value = "";
      this.render();
    };

    Utils.$onEnter(textBox, handler);
    Utils.$on(target, "click", handler);
  }

  initClearListener() {
    const target = Utils.qs("#clear");
    Utils.$on(target, "click", (e) => {
      e.preventDefault();
      this.collection.clear();
      this.render();
    });
  }

  initResetListener() {
    const target = Utils.qs("#reset");
    Utils.$on(target, "click", (e) => {
      e.preventDefault();
      this.collection.reset();
      window.location.reload();
    });
  }

  initDateTaskClickListener() {
    const dateTaskEls = Utils.qsAll(".datetask");
    Array.from(dateTaskEls).forEach((el) => {
      Utils.$on(el, "click", (e) => {
        e.preventDefault();
        const { target } = e;
        const day = parseInt(target.getAttribute("day"), 10);
        const taskId = target.getAttribute("taskId");
        this.collection.getDate(day).toggleTaskStatus(taskId);
        this.render();
      });
    });
  }

  initDeleteTaskListener() {
    const tasks = Utils.qsAll(".delete-task");
    Array.from(tasks).forEach((el) => {
      Utils.$on(el, "click", (e) => {
        e.preventDefault();
        const { target } = e;
        const taskId = target.parentNode.getAttribute("taskId");
        this.collection.removeTask(taskId);
        this.render();
      });
    });
  }

  render() {
    this.view.render();
    this.collection.storeDates();
    this.collection.storeTasks();
    this.initListeners();
  }
}
