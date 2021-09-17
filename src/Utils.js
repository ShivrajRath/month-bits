/**
 * Collection of utilities method
 */
export default class Utils {
  /**
   * Shorthand for query selector
   * @param {string} query query string
   */
  static qs = (query) => document.querySelector(query);

  /**
   * Shorthand for query selector all
   * @param {string} query query string
   */
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

  /**
   * Creates a div with options and appends to container
   * @param {Node} parent parentElement
   * @param {string} text Text to be displayed
   * @param {object} attributes Attributes to be set to the element
   * @returns new element
   */
  static appendTextEl = (parent, text, attributes = {}) => {
    const el = document.createElement("div");
    el.innerHTML = text;
    for (let item of Object.entries(attributes)) {
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
   * Enter event listner wrapper
   *
   * @param {Element|Window} target Target Element
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

  /**
   * Generates random color HEX
   */
  static getRandomColor() {
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10);
    }
    return color;
  }
}
