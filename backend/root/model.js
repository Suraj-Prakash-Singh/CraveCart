const mongoose  = require("mongoose");
const { MONGODBURL }  = require("./configuration");

mongoose.connect(MONGODBURL);

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

module.exports = {User};