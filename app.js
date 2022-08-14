require('dotenv').config()
const express = require("express")
const app = express()
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser')
const { checkUser } = require('./middleware/authMiddleware')
app.use(express.static('public'))
app.set('view engine', 'ejs')

mongoose.connect(process.env.URI
    , (err) => {
        if (err)
            console.log(err);
        else
            console.log("connected to mongodb");
    });
app.use(express.json()) // in body raw json input
app.use(cookieParser())
app.get('*', checkUser);
app.use(authRoutes);


app.listen(3000, () => {
    console.log("listening on port 3000");
})