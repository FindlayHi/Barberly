var mongoose = require('mongoose');


// Create the BarberSchema.
var BarberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    }
});

// Export the Schema
module.exports = BarberSchema;
