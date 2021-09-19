const mongoose = require('mongoose');

const volunteerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    pan: {
        type: String,
        required: true,
        unique: true
    },
    reason: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('volunteer', volunteerSchema);