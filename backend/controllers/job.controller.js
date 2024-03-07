const { Job } = require("../models/job.model");

//^ get All Jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find({});
    return res.send(jobs);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ get single job
const getJobById = async (req, res) => {
  const { id } = req.params;
  try {
    const job = await Job.findById(id);
    if (job) return res.send(job);
    return res.send("couldn't find the job");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ create
const createJob = async (req, res) => {
  const { body } = req;
  console.log(body.formData);
  try {
    const newJob = new Job(body.formData);
    await newJob.save();
    return res.send(newJob);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ update
const updateJob = async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  try {
    const job = await Job.findByIdAndUpdate(id, body, { new: true });
    if (job) return res.send(job);
    return res.send("job wasn't found");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ delete
const deleteJob = async (req, res) => {
  const { id } = req.params;
  try {
    const delJob = await Job.findByIdAndDelete(id);
    res.send("deleted successfully");
  } catch (error) {
    res.status(400).send("Error");
  }
};

module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};
