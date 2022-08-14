const mongoose = require("mongoose")
const employeeSchema = new mongoose.Schema({
    EmployeeID: String,
    EmployeeName: String,
    DateOfBirth: Date,
    Email: String,
    PhoneNumber: Number,
    Street: String,
    City: String,
    State: String,
    Country: String,
    Pincode: Number
})
const Employee = mongoose.model("employee", employeeSchema)
module.exports = Employee