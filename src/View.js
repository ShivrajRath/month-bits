import constants from "./constants";
import Utils from "./Utils";
import "./app.scss";

export default class View {
  constructor(collection) {
    this.collection = collection;
  }

  renderDates = () => {
    const dates = this.collection.getDates();
    const container = Utils.qs("#container");

    Utils.appendTextEl(container, constants.firstCellLabel, {
      class: "bold",
    });

    for (const { day } of dates) {
      Utils.appendTextEl(container, day);
    }
  };

  renderTasks = () => {
    const tasks = this.collection.getTasks();
    const dates = this.collection.getDates();
    const container = Utils.qs("#container");
    for (const { name, id, color } of tasks) {
      const taskEl = Utils.appendTextEl(container, name || "&nbsp;", {
        style: `color: ${color}`,
        class: "task",
        taskId: `${id}`,
      });
      Utils.appendTextEl(taskEl, "x", {
        class: "delete-task hide-print",
        tabIndex: "0",
        "aria-label": `delete ${name}`,
      });
      for (const date of dates) {
        const { day } = date;
        const isTaskComplete = !!date[id];
        const el = Utils.appendTextEl(container, "", {
          taskId: `${id}`,
          day: `${day}`,
          class: "datetask",
          tabIndex: "0",
          role: "checkbox",
          style: `color: ${isTaskComplete ? color : "#fff"}`,
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
