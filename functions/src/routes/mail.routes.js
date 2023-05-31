// eslint-disable-next-line new-cap
const router = require("express").Router();

router.get("/mail", (req, res) => {
  res.send("Mail route");
});

module.exports = router;
