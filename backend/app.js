const express = require("express");
const studentRouter = require("./routes/student.routes");
const hrRouter = require("./routes/hr.routes");
const staffRouter = require("./routes/staff.routes");
const collageRouter = require("./routes/groceryList.routes");
const jobRouter = require("./routes/tokenManipulation.routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/hrs", hrRouter);
app.use("/api/v1/staffs", staffRouter);
app.use("/api/v1/collages", collageRouter);
app.use("/api/v1/jobs",jobRouter)

module.exports = { app };
