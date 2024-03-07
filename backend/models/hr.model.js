const mongoose = require("mongoose");

const hrSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  password: { type: String, require: true },
  email: { type: String, require: true },
  coverImg: { type: String },
  contactInfo: {
    phoneNumber: { type: String },
    email: { type: String },
    linkedin: { type: String },
  },
  company: { type: String },
  jobs: [{ type: mongoose.Types.ObjectId, ref: "Job" }],
  
});

const HR = mongoose.model("Hr", hrSchema);
module.exports = { HR };
