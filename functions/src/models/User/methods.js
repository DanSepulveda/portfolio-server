/* eslint-disable indent */
const jwt = require("jsonwebtoken");
const config = require("../../../config/config");
const crypto = require("crypto");

/**
 * dasdada
 */
class UserMethods {
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
  }

  /**
   * Saves salt and hashed password in instance of User
   * @param {int} next next function
   */
  hashPass(next) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.password = crypto
      .pbkdf2Sync(this.password, this.salt, 10000, 512, "sha512")
      .toString("hex");
    next();
  }

  /**
   * Return instance methods
   * @return {object}
   */
  getMethods() {
    return {generateJWT: this.generateJWT};
  }
}

module.exports = new UserMethods();
