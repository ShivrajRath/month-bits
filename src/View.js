import Utils from "./Utils";

export default class View {
  constructor(collection) {
    this.collection = collection;
  }

  renderDates = () => {
    const dates = this.collection.getDates();
    const container = Utils.qs("#container");

    Utils.appendTextEl(container, "Tasks");

    for (const { day } of dates) {
      Utils.appendTextEl(container, day);
    }
  };

  renderTasks = () => {
    const tasks = this.collection.getTasks();
    const dates = this.collection.getDates();
    const container = Utils.qs("#container");
    for (const { name, id, color } of tasks) {
      Utils.appendTextEl(container, name);
      for (const date of dates) {
        const { day } = date;
        const isTaskComplete = !!date[id];
        const el = Utils.appendTextEl(container, "", {
          taskId: `${id}`,
          day: `${day}`,
          class: "datetask",
          tabIndex: "0",
          role: "checkbox",
          style: `background-color: ${isTaskComplete ? color : "#fff"}`,
          "aria-checked": isTaskComplete,
          "aria-label": `${name} for Day ${day}`,
        });
      }
    }
  };

  render = () => {
    const container = Utils.qs("#container");
    container.innerHTML = "";
    this.renderDates();
    this.renderTasks();
  };
}
