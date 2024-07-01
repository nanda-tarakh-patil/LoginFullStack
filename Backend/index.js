const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee.models");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Login", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.post("/api/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => {
      res.json(employees);
    })
    .catch((err) => res.status(500).json(err));
  console.log(req.body);
  res.json({ status: "ok" });
});
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
