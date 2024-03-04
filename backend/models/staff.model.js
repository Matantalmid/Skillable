const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  password: { type: String, require: true },
  email: { type: String, require: true },
  role: { type: String },
  coverImg: { type: String },
  collage: [{ type: mongoose.Types.ObjectId, ref: "Collage" }],
});

const Staff = mongoose.model("Staff", staffSchema);
module.exports = { Staff };
