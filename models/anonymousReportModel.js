const mongoose = require('mongoose');

const anonymousReportSchema = mongoose.Schema({
    situation: {
        type: String,
    },
    location: {
        type: String,
    },
    coordinate: {
        lat: {
            type: Number
        },
        lon: {
            type: Number
        }
    }
});

module.exports = mongoose.model('AnonymousReport', anonymousReportSchema);