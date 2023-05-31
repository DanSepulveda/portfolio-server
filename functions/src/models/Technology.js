const {Schema, model} = require("mongoose");

const technologySchema = new Schema({});

const Technology = model("technology", technologySchema);

module.exports = {Technology};
