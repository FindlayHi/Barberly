var mongoose = require('mongoose');


// Create the ClientSchema.
var ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    facebook: {
        type: String,
        required: false
    },
    notes: {
        type: String,
        required: false
    },
    banned: {
        type: Boolean,
        required: true
    }
});

// Export the Schema
module.exports = ClientSchema;
