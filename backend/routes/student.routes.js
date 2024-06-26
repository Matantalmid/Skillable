const { Router } = require("express");
const {
  register,
  login,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  getStudentsByCollege
} = require("../controllers/student.controller");
const router = Router();

//^ Create a new student
router.post("/", register);

//^ register

//^ login
router.post("/login", login);

//^ get a student by id
router.get("/student/:id", getStudentById);

//^ get all students
router.get("/", getAllStudents);

//^ update student by id
router.patch("/:id", updateStudent);

// get Students By College
router.get("/:collegeId", getStudentsByCollege)

//^ delete student by id
router.delete("/:id", deleteStudent);

module.exports = router;
