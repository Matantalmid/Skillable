const { Router } = require("express");
const {
  getAllHR,
  register,
  login,
  getHRById,
  updateHR,
  deleteHR,
} = require("../controllers/hr.controller");
const router = Router();

//^ register
router.post("/register", register);

//^ login
router.post("/login", login);

//^ get all HR
router.get("/", getAllHR);

//^ get a HR by id
router.get("/:id", getHRById);

//^ update HR by id - ?
router.patch("/:id", updateHR);

//^ delete HR by id
router.delete("/:id", deleteHR);

module.exports = router;
