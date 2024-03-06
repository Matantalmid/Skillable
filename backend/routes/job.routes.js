const { Router } = require("express");
const {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
} = require("../controllers/job.controller");
const router = Router();

//^ Create a new job
router.post("/", createJob);

//^ get all jobs
router.get("/", getAllJobs);

//^ get a job by id
router.get("/:id", getJobById);

//^ update job by id
router.patch("/:id", updateJob);

//^ delete job by id
router.delete("/:id", deleteJob);

module.exports = router;
