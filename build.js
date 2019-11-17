const build = require("steal-tools").build;

build(
  {
    config: __dirname + "/package.json!npm",
    babelOptions: {
      presets: ["es2015", "stage-0"]
    }
  },
  {
    // the following are the default values, so you don't need
    // to write them.
    minify: true,
    debug: true
  }
);
