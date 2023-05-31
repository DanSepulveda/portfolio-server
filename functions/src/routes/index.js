/* eslint-disable indent */
// eslint-disable-next-line new-cap
const router = require("express").Router();
const pluralize = require("pluralize");
const path = require("path");
const fs = require("fs");

const PATHS = fs.readdirSync(__dirname);
const moduleMapper = [];

console.log("✔ Mapping routes");
PATHS.forEach((module) => {
  if (module !== "index.js") {
    console.log(module);
    const name = module.split(".")[0];

    // eslint-disable-next-line global-require
    router.use(
      `/${pluralize.plural(name)}`,
      require(path.resolve(__dirname, module)),
    );
    moduleMapper.push({
      Module: name,
      Route: `/${pluralize.plural(name)}`,
    });
  }
});

console.table(moduleMapper);

module.exports = router;
