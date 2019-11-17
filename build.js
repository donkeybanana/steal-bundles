const build = require("steal-tools").build;

build(
  {
    config: __dirname + "/package.json!npm",
    main: ["steal-bundles/public", "steal-bundles/private"],
    babelOptions: {
      presets: ["es2015", "stage-0"]
    }
  },
  {
    minify: false,
    debug: false
  }
);
