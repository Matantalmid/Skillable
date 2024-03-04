const { Router } = require("express")
const router = Router();

//Create a new college  
// router.post('/', createNewCollege);

// register
router.post("/register", register);

//login
router.post("/login", login);

//get all colleges
router.get("/", getAllColleges);

//get a college by id
router.get("/:id", getCollegeById);

//update college by id
router.patch("/:id", updateCollegeById);

//delete college by id
router.delete("/:id", deleteCollegeById);


module.exports = router;