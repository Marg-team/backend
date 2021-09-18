const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    donation_food: {
        type: Number
    },
    donation_clothes: {
        type: Number
    },
    donation_medicine: {
        type: Number
    },
    desc: {
        type: String
    }
    
});

module.exports = mongoose.model('donationForm', donationSchema);