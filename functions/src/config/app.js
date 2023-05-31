require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const {setRoutes} = require("./routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
setRoutes(app);

module.exports = {app};
