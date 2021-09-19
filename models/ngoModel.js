const mongoose = require('mongoose');

const ngoSchema = mongoose.Schema({
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
    reg: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ngo', ngoSchema);