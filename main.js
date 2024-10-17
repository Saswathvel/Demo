// async function getuserdata() {
//     const response = await fetch('https://....');
//     const finaldata = await response.json();
//     document.getElementById("userData").innerHTML = JSON.stringify(finaldata)
// }


const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

mongoose.connect("mongodb+srv://saswathvel:Saswathvel2004@cluster0.1q8dg.mongodb.net/userapp");

const User = mongoose.model('Users', { name: String, email: String, password: String});

// app.post("/signup",  async function(req, res) {
//     const username = req.body.username;
//     const password = req.body.password;
//     const name = req.body.name;

//     const existingUser = await User.findOne({
//         email: username
//     });
//     if(existingUser) {
//         return res.status(400).send("Username already exists");
//     }

//     const user = new User({
//         name : name,
//         email: username,
//         password: password
//     });
// })

const user = new User({
    name: "Saswath",
    email: "sasdfd@example.com",
    password: "123456"
});
user.save();