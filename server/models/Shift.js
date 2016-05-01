var mongoose = require('mongoose');

// Create the shiftSchema.
var shiftSchema = new mongoose.Schema({
    barber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Barber',
        index: true,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    }
});

// Export the Schema
module.exports = shiftSchema;
