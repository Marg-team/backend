const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
    donor_name: {
        type: String
    },
    regular_donor: {
        type: Boolean
    },
    donor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    donation: [
        {
            type: {
                type: String, 
                enum: ['food', 'clothes', 'medicine']
            },
            age_cat: {
                type: String
            },
            gender: {
                type: String,
                enum: ["M", "F"]
            },
            desc: {
                type: String
            },
            cooked: {
                type: Boolean
            },
            quantity: {
                type: String
            },
            veg: {
                type: Boolean
            },
            name: {
                type: String
            }
        }
    ]
});

module.exports = mongoose.model('donationForm', donationSchema);