
const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
}, { timestamps: {
        type: String
    }
})
const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;