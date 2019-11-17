import $ from "jquery";

class Controller {
  element;

  constructor(el) {
    this.element = $(el);
  }
}

export default Controller;
