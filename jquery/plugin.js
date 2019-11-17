import $ from "jquery";

const plugin = function(name, _constructor) {
  $.fn[name] = function(opts) {
    new _constructor(this, opts);

    return this;
  };
};

export default plugin;
