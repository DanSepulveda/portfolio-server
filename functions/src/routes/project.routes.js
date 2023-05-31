// eslint-disable-next-line new-cap
const router = require("express").Router();

router.get("/project", (req, res) => {
  res.send("Project route");
});

module.exports = router;
