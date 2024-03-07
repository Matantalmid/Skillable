const { HR } = require("../models/hr.model");
const bcrypt = require("bcryptjs");
const { generateToken, verifyToken } = require("../utils/jwt");

//^ get All HR
const getAllHR = async (req, res) => {
  try {
    const hrList = await HR.find({});
    return res.send(hrList);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ register as HR
const register = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  const isEmailUsed = await HR.findOne({ email });
  if (isEmailUsed) {
    return res.status(400).send("email already in use");
  }
  try {
    const hash = await bcrypt.hash(password, 10);
    const hr = new HR({
      email,
      password: hash,
      firstName,
      lastName,
      role: "HR",
    });

    await hr.save();
    const token = generateToken({
      email: hr.email,
      id: hr._id,
      role: "HR",
      firstName,
      lastName,
    });

    // await sendWelcomeEmail(hr.email, "welcome", { name: hr.fullName });

    return res.send({
      hr: {
        email,
        id: hr._id,
        role: "HR",
        firstName,
        lastName,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ login  as HR
const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const hr = await HR.findOne({ email });
    if (hr) {
      const isMatch = await bcrypt.compare(password, hr.password);
      if (isMatch) {
        const token = generateToken({
          email: hr.email,
          id: hr._id,
          role: "HR",
          firstName: hr.firstName,
          lastName: hr.lastName,
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
``;

//^ get single HR
const getHRById = async (req, res) => {
  const { id } = req.params;
  try {
    const hr = await HR.findById(id);
    if (hr) return res.send(hr);
    return res.send("couldn't find the HR");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ update
const updateHR = async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  try {
    const hr = await HR.findByIdAndUpdate(id, body, { new: true });
    if (hr) return res.send(hr);
    return res.send("HR wasn't found");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ delete
const deleteHR = async (req, res) => {
  const { id } = req.params;
  try {
    const delHR = await HR.findByIdAndDelete(id);
    res.send("deleted successfully");
  } catch (error) {
    res.status(400).send("Error");
  }
};

module.exports = {
  getAllHR,
  getHRById,
  updateHR,
  deleteHR,
  login,
  register,
};
