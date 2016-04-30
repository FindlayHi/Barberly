var restful = require('node-restful'); // converts to node api based on models. allows for CRUD

module.exports = function(app, route) {

    //setup the controller for REST.
    var rest = restful.model(
        'Appointment',
        app.models.Appointment
    ).methods(['get', 'put', 'post', 'delete']);

    //register this enpoint with the app
    rest.register(app, route);

    //return Middleware

    return function(req, res, next) {
        next();
    };
};
