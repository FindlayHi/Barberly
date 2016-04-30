var mongoose = require('mongoose');


// Create the AppointmentSchema.
var AppointmentSchema = new mongoose.Schema({
    client: {
        type: String,
        required: true
    },
    barber: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    }
});

// Export the Schema
module.exports = AppointmentSchema;
