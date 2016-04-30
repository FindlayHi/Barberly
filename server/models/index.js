module.exports = {

  Appointment: require('./Appointment.js'),
  Barber: require('./Barber.js'),
  Client: require('./Client.js'),

};

app.models = require('./models/index');

// load the routes

var routes = require('./routes');
