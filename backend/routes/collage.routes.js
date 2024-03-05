const { Router } = require("express");
const { createCollege, getAllColleges, getCollegeById, updateCollege, deleteCollege } = require("../controllers/collage.controller");
const router = Router();


//^ create new collage
router.post("/", createCollege);

//^get all colleges
router.get("/", getAllColleges);

//^get a college by id
router.get("/college/:id", getCollegeById);

//^update college by id
router.patch("/:id", updateCollege);

//^delete college by id
router.delete("/:id", deleteCollege);

module.exports = router;
