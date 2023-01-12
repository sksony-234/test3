const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: [true, "plaese enter user's name"] },
    email: { type: String, required: [true, "plaese enter user's email"] },
    password: { type: String, required: true },
    rollNo: { type: Number, required: [true, "plaese enter user's Roll No."] }
});

const User = mongoose.model('User', userSchema);

module.exports = User;