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
    //0: form submitted | or rejected by ngo
    //1: form accepted and assigned 
    //2: form work done by ngo
    //-1: form denied
    status: {
        type: Number,
        enum: [0, 1, 2, -1]
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ngos'
    }
    
});

module.exports = mongoose.model('donationForm', donationSchema);