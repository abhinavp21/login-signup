require('dotenv').config()
const Employee = require("./models/Employee")
const mongoose = require("mongoose")
const data = require("./data")

mongoose.connect(process.env.URI
    , (err) => {
        if (err)
            console.log(err);
        else {
            console.log("connected to mongodb");
            Employee.insertMany(data, (err, data) => {
                if (err)
                    console.log(err);
                else
                    console.log(data);
            })
        }
    });

