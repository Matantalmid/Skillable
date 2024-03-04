const { Router } = require("express")
const router = Router();

//Create a new student
router.post('/', createNewStudent);

//register
// router.post("/register", register);

//login
router.post("/login", login);

//get a student by id
router.get("/:id", getAllStudentById);

//get all students
router.get("/", getAllStudents);

//update student by id
router.patch("/:id", updateUser);

//delete student by id
router.delete("/:id", deleteUser);


module.exports = router;





