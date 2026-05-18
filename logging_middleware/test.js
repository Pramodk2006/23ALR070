const createLogger = require("./logger");

const log = createLogger("backend");

log(
  "info",
  "controller",
  "Testing middleware logging"
);