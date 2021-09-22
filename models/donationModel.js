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
    },
    accepted: {
        type: Boolean,
        default: false
    },
    declined: {
        type: Boolean,
        default: false
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ngos'
    }
    
});

module.exports = mongoose.model('donationForm', donationSchema);