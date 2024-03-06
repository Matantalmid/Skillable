const { Router } = require("express");
const router = Router();
const { verifyToken } = require("../utils/jwt");
const { auth } = require("../middlewares/auth");

router.patch("/tokenDecryptor", async (req, res) => {
  try {
    const { body } = req;
    const userToken = body.token;
    const payload = verifyToken(userToken);
    if (!payload) return res.status(401).send("unAuthorized");
    return res.send(payload);
  } catch (error) {
    console.log(error);
    return res.status(401).send("unAuthorized");
  }
});

// router.post("/createLinkToken/:id", async (req, res) => {
//   const { id } = req.params;
//   const { body } = req;
//   try {
//     const token = generateToken({ id, inviter: body.inviter, groupTitle:body.groupTitle });
//     res.send(token);
//   } catch (error) {
//     console.log(error);
//     return res.status(400).send("Error");
//   }
// });

module.exports = router;
