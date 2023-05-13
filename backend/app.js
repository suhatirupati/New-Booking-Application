const express = require('express');

const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user-routes');
dotenv.config();

// middleware
app.use("/user", userRouter)

mongoose.connect("mongodb+srv://Suha_Tirupati:aeHf77VR7hr3GbOq@movie-system.hrgju9p.mongodb.net/Movies?retryWrites=true&w=majority")

app.listen(3500, () => {
    console.log('Connected to localhost port 3500');
})

