import plugin from "../jquery/plugin.js";
import Controller from "../lib/controller.js";

class App extends Controller {
  message = "Hello, world!";

  constructor(el, opts) {
    const { message } = opts;

    super(el);

    this.message = message;
    this.element.html(this.render());
  }

  render() {
    return `<div>${this.message}</div>`;
  }
}

plugin("app", App);

export default App;
