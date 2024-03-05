const { Router } = require("express");
const router = Router();
const {
  register,
  login,
  getAllStaff,
  getStaffById,
  updateStaff,
} = require("../controllers/staff.controller");
const { deleteHR } = require("../controllers/hr.controller");

// register a new staff
router.post("/register", register);

// login
router.post("/login", login);

// get all staff
router.get("/", getAllStaff);

// get a staff by id
router.get("/:id", getStaffById);

// update a staff by id
router.patch("/:id", updateStaff); //^ update HR by id - ?

// delete a staff by id
router.delete("/:id", deleteHR); //^ delete HR by id

module.exports = router;
