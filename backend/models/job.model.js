const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  name: { type: String, require: true },
  coverImg: { type: String },
  description: { type: String, require: true },
  skillRequired: { type: String, require: true },
  responsiblies: { type: String, require: true },
  profession: { type: String, require: true },

  appliedStudents: [{ type: mongoose.Types.ObjectId, ref: "Student" }],


  status: { type: String },
  date: { type: String }, //! temporary it will be in hebrew
  createdAt: { type: Date, default: Date.now() },
  postedBy: { type: mongoose.Types.ObjectId, ref: "HR" },
});

const Job = mongoose.model("Job", jobSchema);
module.exports = { Job };
