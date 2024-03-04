const { Router } = require("express")
const router = Router();

// register
router.post("/register", register);

//login
router.post("/login", login);

//get all HR
router.get("/", getAllHR);

//get a HR by id
router.get("/:id", getHRById);

//update HR by id - ?
router.patch("/:id", updateHRById);

//delete HR by id 
router.delete("/:id", deleteHRById);


module.exports = router;