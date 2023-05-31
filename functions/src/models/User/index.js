/* eslint-disable indent */
const {Schema, model} = require("mongoose");
const methods = require("./methods");

const userSchema = new Schema(
  {
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    salt: {type: String, required: true},
  },
  {
    timestamps: true,
    methods: methods.getMethods(),
  },
);

userSchema.pre("validate", methods.hashPass);

const User = model("project", userSchema);

module.exports = {User};
