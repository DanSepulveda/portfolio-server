const {Schema, model} = require("mongoose");

const projectSchema = new Schema({});

const Project = model("project", projectSchema);

module.exports = {Project};
