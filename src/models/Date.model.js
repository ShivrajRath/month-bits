import Utils from "../Utils";

export default class Date {
  static count = 0;
  constructor(date = {}) {
    this.id = `dt${Date.count++}`;
    this.day = Date.count;
    if (Utils.isEmpty(date)) {
      this.notes = "";
    } else {
      for (const [key, value] of Object.entries(date)) {
        this[key] = value;
      }
    }
  }

  toggleTaskStatus = (taskid) => {
    this[taskid] = !this[taskid];
  };
}
