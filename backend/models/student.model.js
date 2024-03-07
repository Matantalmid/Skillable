const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  password: { type: String, require: true },
  email: { type: String, require: true },
  profession: { type: String },
  coverImg: { type: String },
  applyJobs: [{  type: mongoose.Types.ObjectId, ref:  "Job" }],
  softSkills: [{ skills: { type: String }, rate: { type: Number } }],
  techSkills: [{ skills: { type: String }, rate: { type: Number } }],
  workExp: [
    {
      position: { type: String },
      company: { type: String },
      startDate: { type: Date },
      endDate: { type: Date },
      desc: { type: String },
      skills: [{ type: String }],
      projectsUrl: [{ type: String }],
    },
  ],
  education: [
    {
      position: { type: String },
      company: { type: String },
      startDate: { type: Date },
      endDate: { type: Date },
      desc: { type: String },
      skills: [{ type: String }],
      projectsUrl: [{ type: String }],
    },
  ],
  contactInfo: {
    phoneNumber: { type: String },
    email: { type: String },
    portfolio: { type: String },
    linkedin: { type: String },
    github: { type: String },
  },

  contactInfo: { frame: { type: String }, location: { type: String } },
  recruitmentStatus: { type: String }, //the recruitment status
  about: {
    desc: { type: String },
    lang: { name: { type: String }, rate: { type: String } },
  },
  recommendations: {
    msg: { type: String },
    user: { type: mongoose.Types.ObjectId, ref: "Students" },
  },
  college: { type: mongoose.Types.ObjectId, ref: "Students" },
  role: { type: String },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = { Student };
