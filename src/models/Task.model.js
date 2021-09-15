export default class Task {
  static count = 0;
  static color = [
    "#112e51",
    "#046b99",
    "#4c2c92",
    "#494440",
    "#cd2026",
    "#2e8540",
    "#981b1e",
  ];
  constructor(name) {
    this.name = name;
    const { count } = Task;
    this.id = `tsk${count}`;
    this.setColor(Task.color[count]);
    Task.count++;
  }

  setColor(color) {
    this.color = color;
  }
}
