import Collection from "./Collection";
import CONSTANTS from "./CONSTANTS";
import Controller from "./Controller";
import Store from "./Store";
import View from "./View";

export default class App {
  constructor() {
    this.store = new Store(CONSTANTS.storeName);
    this.collection = new Collection(this.store);
    this.view = new View(this.collection);
    this.conroller = new Controller(this.view, this.collection);
  }
}

((window) => {
  window["app"] = new App();
})(window);
