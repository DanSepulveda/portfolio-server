/* eslint-disable indent */
const {connect} = require("mongoose");
const config = require("./config");

connect(config.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("DB connection error: " + error.message));
