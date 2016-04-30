var mongoose = require('mongoose');


// Create the ServiceSchema.
var ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    timeRequired: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
});

// Export the Schema
module.exports = ServiceSchema;
