import Utils from "../Utils";

export default class Task {
  static count = 0;
  constructor(name) {
    this.name = name;
    const { count } = Task;
    this.id = `tsk${count}`;
    this.setColor(Utils.getRandomColor());
    Task.count++;
  }

  setColor(color) {
    this.color = color;
  }
}
