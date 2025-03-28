const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);