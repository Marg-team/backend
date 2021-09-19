const mongoose = require('mongoose');

const homelessformSchema = mongoose.Schema(
    {
        name: {
            type: String
        },
        him_homeless: {
            type: Boolean
        },
        contact: {
            type: String
        },
        proof: {
            type: String
        },
        address: {
            type: String
        },
        desc: {
            type: String
        },
        coordinate: {
            lat: {
                type: Number,
            },
            lon: {
                type: Number,
            }
        }
    },
    {
        timestamp: true
    }
);

module.exports = mongoose.model('Homelessform', homelessformSchema);