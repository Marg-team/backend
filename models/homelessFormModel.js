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
        },
        //0: form submitted | or rejected by ngo
        //1: form accepted and assigned 
        //2: form work done by ngo
        //-1: form denied
        status: {
            type: Number,
            enum: [-1, 0, 1, 2]
        }
    },
    {
        timestamp: true
    }
);

module.exports = mongoose.model('Homelessform', homelessformSchema);