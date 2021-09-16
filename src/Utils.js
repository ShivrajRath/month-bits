/**
 * Collection of utilities method
 */
export default class Utils {
  /**
   * Shorthand for query selector
   * @param {string} query query string
   */
  static qs = (query) => document.querySelector(query);
  static qsAll = (query) => document.querySelectorAll(query);
  /**
   * Checks if the argument is empty (0, '', {}, [])
   * @param {Any} el
   * @returns {boolean}
   */
  static isEmpty = (el) =>
    !el ||
    el === undefined ||
    el === null ||
    (Array.isArray(el) && el.length === 0) ||
    (typeof el === "object" && Object.keys(el).length === 0);

  static appendTextEl = (parent, text, options = {}) => {
    const el = document.createElement("div");
    el.innerHTML = text;
    for (let item of Object.entries(options)) {
      el.setAttribute(item[0], item[1]);
    }
    parent.appendChild(el);
    return el;
  };

  /**
   * addEventListener wrapper
   *
   * @param {Element|Window} target Target Element
   * @param {string} type Event name to bind to
   * @param {Function} callback Event callback
   * @param {boolean} [capture] Capture the event
   */
  static $on(target, type, callback, capture) {
    target.addEventListener(type, callback, !!capture);
    if (type === "click") {
      target.addEventListener("keypress", (e) => callback(e), !!capture);
    }
  }

  /**
   * removeEventListener wrapper
   *
   * @param {Element|Window} target Target Element
   * @param {string} type Event name to bind to
   * @param {Function} callback Event callback
   * @param {boolean} [capture] Capture the event
   */
  static $off(target, type, callback, capture) {
    target.removeEventListener(type, callback, !!capture);
  }

  /**
   * addEventListener wrapper
   *
   * @param {Element|Window} target Target Element
   * @param {string} type Event name to bind to
   * @param {Function} callback Event callback
   * @param {boolean} [capture] Capture the event
   */
  static $onEnter(target, callback, capture) {
    target.addEventListener(
      "keypress",
      (e) => e.key === "Enter" && callback(e),
      !!capture
    );
  }

  static getRandomColor() {
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10);
    }
    return color;
  }
}
