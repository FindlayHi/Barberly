var mongoose = require('mongoose');


// Create the AppointmentSchema.
var AppointmentSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        index: true,
        required: true
    },
    barber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Barber',
        index: true,
        required: true
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        index: true,
        required: true
    },
    time: {
        type: Date,
        required: true
    }
});

// Export the Schema
module.exports = AppointmentSchema;
