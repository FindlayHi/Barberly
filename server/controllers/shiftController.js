var restful = require('node-restful'); // converts to node api based on models. allows for CRUD

module.exports = function(app, route) {
  'use strict';
  //setup the controller for REST.
  var rest = restful.model(
    'Shift',
    app.models.Shift
  ).methods(['get', 'put', 'post', 'delete']);

  //register this enpoint with the app
  rest.register(app, route);

  //return Middleware

  return function(req, res, next) {
    next();
  };
};
