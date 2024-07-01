const { model } = require("mongoose");

const mongoose = require(mongoose);

const EmployeeSchema = new mongoose.Schema({
  name: String,
  dob: Number,
  email: String,
  password: String,
});

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);
module.exports = EmployeeModel;
