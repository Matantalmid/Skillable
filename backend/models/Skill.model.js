const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  name: { type: String, require: true },
  type: { type: String},
});

const Skill = mongoose.model("Skill", skillSchema);
module.exports = { Skill };
