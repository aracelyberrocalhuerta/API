const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const User = new Schema({
    id: String ,
    name: String,
    lastname: String,
    username: String,
    email: String,
    password: String,
    department: String,
    role: String,
    dateOfBirth: String,
    project:[{name: String, client: String}],
});

module.exports = mongoose.model("User", User);