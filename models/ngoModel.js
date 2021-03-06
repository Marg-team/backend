const mongoose = require('mongoose');

const ngoSchema = mongoose.Schema({
    ngo: {
        type: String,
        required: true
    },
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
    },
    activated: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('ngo', ngoSchema);