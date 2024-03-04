const mongoose = require("mongoose");

const collageSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  password: { type: String, require: true },
  email: { type: String, require: true },
  profession: { type: String },
  coverImg: { type: String },
  graduates: [{ type: mongoose.Types.ObjectId, ref: "Students" }],
  releventJobs: [{ type: mongoose.Types.ObjectId, ref: "Job" }],
});

const Collage = mongoose.model("Collage", collageSchema);
module.exports = { Collage };
