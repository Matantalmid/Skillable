const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
});

const Job = mongoose.model("Job", jobSchema);
module.exports = { Job };
