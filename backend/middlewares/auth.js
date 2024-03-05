const { verifyToken } = require("../utils/jwt");

const auth = (req, res, next) => {
  try {
    const userToken = req.headers["authorization"];
    if (!userToken) return res.status(401).send("unAuthorized");
    const token = userToken.split(" ")[1];
    const payload = verifyToken(token);
    if (!payload) return res.status(401).send("unAuthorized");
    req.user = payload;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).send("token expired");
  }
};

module.exports = { auth };
