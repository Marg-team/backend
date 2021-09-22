const mongoose = require('mongoose');

const anonymousReportSchema = mongoose.Schema({
    situation: {
        type: String,
    },
    address: {
        type: String,
    },
    coordinate: {
        lat: {
            type: Number
        },
        lon: {
            type: Number
        }
    },
    proof: {
        type: String
    },
    //-1: denied
    //0: idle
    //1: accepted
    //2: done
    status: {
        type: Number,
        enum: [-1, 0, 1, 2]
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ngos'
    }
});

module.exports = mongoose.model('AnonymousReport', anonymousReportSchema);