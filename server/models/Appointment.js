var mongoose = require('mongoose');


// Create the MovieSchema.
var AppointmentSchema = new mongoose.Schema({
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
    type: String,
    required: true
  }
});

// Export the Schema
module.exports = AppointmentSchemal;
