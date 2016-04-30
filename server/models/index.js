module.exports = {
    Appointment: require('./Appointment.js'),
    Barber: require('./Barber.js'),
};

app.models = require('./models/index');

// load the routes

var routes = require('./routes');
