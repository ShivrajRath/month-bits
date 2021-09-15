import Utils from "./Utils";

export default class Controller {
  constructor(view, collection) {
    this.view = view;
    this.collection = collection;
    this.render();
  }

  initListeners() {
    this.initAddTaskListener();
    this.initDateTaskClickListener();
  }

  initAddTaskListener() {
    const target = Utils.qs("#add-a-task");
    const parent = target.parentNode;
    const cloneTarget = target.cloneNode(true);
    parent.appendChild(cloneTarget);

    target.remove();

    const handler = (e) => {
      e.preventDefault();
      const textBox = cloneTarget.previousElementSibling;
      this.collection.addTask(textBox.value);
      textBox.value = "";
      this.render();
    };

    Utils.$on(cloneTarget, "click", handler);
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

  render() {
    this.view.render();
    this.collection.storeDates();
    this.collection.storeTasks();
    this.initListeners();
  }
}
