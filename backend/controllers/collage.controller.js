const { Collage } = require("../models/collage.model");

//^ get All Colleges
const getAllColleges = async (req, res) => {
  try {
    const colleges = await Collage.find({});
    return res.send(colleges);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ get single college
const getCollegeById = async (req, res) => {
  const { id } = req.params;
  try {
    const college = await Collage.findById(id);
    if (college) return res.send(college);
    return res.send("couldn't find the college");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ create
const createCollege = async (req, res) => {
  const { body } = req;
  try {
    const newCollege = new Collage(body);
    await newCollege.save();
    return res.send(newCollege);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ update
const updateCollege = async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  try {
    const college = await Collage.findByIdAndUpdate(id, body, { new: true });
    if (college) return res.send(college);
    return res.send("college wasn't found");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ delete
const deleteCollege = async (req, res) => {
  const { id } = req.params;
  try {
    const delCollege = await Collage.findByIdAndDelete(id);
    res.send("deleted successfully");
  } catch (error) {
    res.status(400).send("Error");
  }
};

module.exports = {
  getAllColleges,
  getCollegeById,
  createCollege,
  updateCollege,
  deleteCollege,
};
