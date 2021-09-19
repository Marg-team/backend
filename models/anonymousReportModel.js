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
    }
});

module.exports = mongoose.model('AnonymousReport', anonymousReportSchema);