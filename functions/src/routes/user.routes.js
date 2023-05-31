// eslint-disable-next-line new-cap
const router = require("express").Router();

router.get("/login", (req, res) => {
  res.send("Login route");
});

module.exports = router;
