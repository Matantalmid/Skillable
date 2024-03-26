const { Student } = require("../models/student.model");
const bcrypt = require("bcryptjs");
const { generateToken, verifyToken } = require("../utils/jwt");
const {
  sendWelcomeEmail,
  sendResetPasswordEmail,
} = require("../services/email/sendEmail");
//^ get All Students
const getAllStudents = async (req, res) => {
  try {
    const studentList = await Student.find({});
    return res.send(studentList);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

const getStudentsByCollege = async (req, res) => {
  const { collegeId } = req.params;
  try {
    const studentList = await Student.find({college: collegeId});
    return res.send(studentList);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ register as Student
//? maybe we should do register idk :P
const register = async (req, res) => {
  const { email, password, firstName, lastName, applyJobs } = req.body;

  const isEmailUsed = await Student.findOne({ email });
  if (isEmailUsed) {
    return res.status(400).send("email already in use");
  }
  try {
    const hash = await bcrypt.hash(password, 10);
    const student = new Student({
      email,
      password: hash,
      firstName,
      lastName,
      applyJobs,
    });

    await student.save();
    const token = generateToken({
      email: student.email,
      id: student._id,
      firstName,
      lastName,
      role: "student",
    });

    await sendWelcomeEmail(student.email, "welcome", { name: firstName });

    return res.send({
      student: {
        email,
        id: student._id,
        role: "student",
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

//^ login as Student
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const student = await Student.findOne({ email });
    if (student) {
      const isMatch = await bcrypt.compare(password, student.password);
      if (isMatch) {
        const token = generateToken({
          email: student.email,
          id: student._id,
          role: "Student",
          firstName: student.firstName,
          lastName: student.lastName,
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

//^ get single Student
const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    if (student) return res.send(student);
    return res.send("couldn't find the Student");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ update Student by id - ?
const updateStudent = async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  try {
    const student = await Student.findByIdAndUpdate(id, body, { new: true });
    if (student) return res.send(student);
    return res.send("Student wasn't found");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

//^ delete Student by id
const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const delStudent = await Student.findByIdAndDelete(id);
    res.send("deleted successfully");
  } catch (error) {
    res.status(400).send("Error");
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  getStudentsByCollege,
  login,
  register,
};
