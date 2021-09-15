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
        coordinate: {
            lat: Number,
            lon: Number
        }
    },
    {
        timestamp: true
    }
);

module.exports = mongoose.model('Homelessform', homelessformSchema);