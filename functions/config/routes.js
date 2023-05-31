const apiRoutes = require("../src/routes");

module.exports.setRoutes = (app) => {
  app.get("/", (req, res) => {
    res.send("Welcome to the APP");
  });

  /**
   * API Route.
   * All the API will start with "/api/[MODULE_ROUTE]"
   */
  app.use("/api", apiRoutes);
};
