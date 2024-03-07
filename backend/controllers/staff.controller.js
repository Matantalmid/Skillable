const { Staff } = require("../models/staff.model");
const bcrypt = require("bcryptjs");
const { generateToken, verifyToken } = require("../utils/jwt");

//^ get All Staff
const getAllStaff = async (req, res) => {
  try {
    const staffList = await Staff.find({});
    return res.send(staffList);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ register as Staff
const register = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  const isEmailUsed = await Staff.findOne({ email });
  if (isEmailUsed) {
    return res.status(400).send("email already in use");
  }
  try {
    const hash = await bcrypt.hash(password, 10);
    const staff = new Staff({
      email,
      password: hash,
      firstName,
      lastName,
      role: "staff",
    });

    await staff.save();
    const token = generateToken({
      email: staff.email,
      id: staff._id,
      role: "staff",
      firstName: firstName,
      lastName: lastName,
    });

    // await sendWelcomeEmail(staff.email, "welcome", { name: staff.fullName });

    return res.send({
      staff: {
        email,
        id: staff._id,
        role: "staff",
        firstName: firstName,
        lastName: lastName,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ login as Staff
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const staff = await Staff.findOne({ email });
    if (staff) {
      const isMatch = await bcrypt.compare(password, staff.password);
      if (isMatch) {
        const token = generateToken({
          email: staff.email,
          id: staff._id,
          role: "staff",
          firstName: staff.firstName,
          lastName: staff.lastName,
        });
        return res.send(token);
      }
      return res.status(401).send("Email or password are incorrect");
    }

    return res.status(401).send("Email or password are incorrect");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

//^ get single Staff
const getStaffById = async (req, res) => {
  const { id } = req.params;
  try {
    const staff = await Staff.findById(id);
    if (staff) return res.send(staff);
    return res.send("couldn't find the Staff");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ update Staff by id - ?
const updateStaff = async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  try {
    const staff = await Staff.findByIdAndUpdate(id, body, { new: true });
    if (staff) return res.send(staff);
    return res.send("Staff wasn't found");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ delete Staff by id
const deleteStaff = async (req, res) => {
  const { id } = req.params;
  try {
    const delStaff = await Staff.findByIdAndDelete(id);
    res.send("deleted successfully");
  } catch (error) {
    res.status(400).send("Error");
  }
};

module.exports = {
  getAllStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
  login,
  register,
};
