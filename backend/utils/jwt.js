const jwt = require("jsonwebtoken");
const { config } = require("../config");
const jwtSecret = config.JWT_SECRET;

const generateToken = (payload) => {
  const token = jwt.sign(payload, jwtSecret, { expiresIn: "30d" });
  return token;
};

const verifyToken = (token) => {
  const payload = jwt.verify(token, jwtSecret);
  return payload;
};

module.exports = { generateToken, verifyToken };
