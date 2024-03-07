const { Router } = require("express");
const router = Router();
const { verifyToken } = require("../utils/jwt");
const { auth } = require("../middlewares/auth");
const { Staff } = require("../models/staff.model");
const { HR } = require("../models/hr.model");
const { Student } = require("../models/student.model");

router.patch("/tokenDecryptor", async (req, res) => {
  try {
    const { body } = req;
    const userToken = body.token;
    const payload = verifyToken(userToken);
    if (!payload) return res.status(401).send("unAuthorized");
    switch (payload.role) {
      case "staff":
        {
          try {
            const staff = await Staff.findById(payload.id);
            const { password, ...sendingStaff } = staff.toObject();
            return res.send(sendingStaff);
          } catch (error) {
            console.log(`staff error`);
            console.log(error);
          }
        }

        break;
      case "HR":
        {
          try {
            const hr = await HR.findById(payload.id);
            const { password, ...sendingHR } = hr.toObject();
            return res.send(sendingHR);
          } catch (error) {
            console.log(error);
            console.log(`hr error`);
          }
        }
        break;
      case "student":
        {
          try {
            const student = await Student.findById(payload.id);
            const { password, ...sendingStudent } = student.toObject();
            return res.send(sendingStudent);
          } catch (error) {
            console.log(error);
            console.log(`student error`);
          }
        }
        break;

      default:
        break;
    }
    return res.status(404).send("didn't find user");
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
