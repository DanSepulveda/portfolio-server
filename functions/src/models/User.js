const {Schema, model} = require("mongoose");

const userSchema = new Schema({});

const User = model("project", userSchema);

module.exports = {User};
