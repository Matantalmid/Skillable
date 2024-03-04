const { Router } = require("express")
const router = Router();

//Create a new staff ?  
// router.post('/', createNewStaff);

// register
router.post("/register", register);

//login
router.post("/login", login);

//get all staff
router.get("/", getAllStaff);

//get staff by id
router.get("/:id", getStaffById);

//update staff by id
router.patch("/:id", updateStaffById);

//delete staff by id
router.delete("/:id", deleteStaffById);


module.exports = router;