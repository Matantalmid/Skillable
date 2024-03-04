const { Router } = require("express")
const router = Router();

//Create a new job  
router.post('/', createNewJob);

//get all jobs
router.get("/", getAllJobs);

//get a job by id
router.get("/:id", getJobById);

//update job by id
router.patch("/:id", updateJobById);

//delete job by id
router.delete("/:id", deleteJobById);


module.exports = router;