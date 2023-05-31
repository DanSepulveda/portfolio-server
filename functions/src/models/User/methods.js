/* eslint-disable indent */
const jwt = require("jsonwebtoken");
const config = require("../../../config/config");

const methods = {
  /**
   * Generates a json web token for a user
   * @return {string} jwt generated
   */
  generateJWT() {
    const {_id, name, lastname, username, email} = this;
    return jwt.sign(
      {
        userId: _id,
        name,
        lastname,
        username,
        email,
      },
      config.JWT_SECRET,
      {expiresIn: "1 day"},
    );
  },
};

module.exports = {methods};
