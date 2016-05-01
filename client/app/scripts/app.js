'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'restangular',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/barbers', {
        templateUrl: 'views/barbers.html',
        controller: 'BarbersCtrl',
        controllerAs: 'barbers'
      })
      .when('/appointments', {
        templateUrl: 'views/appointments.html',
        controller: 'AppointmentsCtrl',
        controllerAs: 'appointments'
      })
      .when('/clients', {
        templateUrl: 'views/clients.html',
        controller: 'ClientsCtrl',
        controllerAs: 'clients'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl',
        controllerAs: 'services'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('BarberRestangular', function(Restangular){
    return Restangular.withConfig(function(RestangularConfigurer){
      RestangularConfigurer.setRestangularFields({id: '_id'});
    });
  })
  .factory('Barber', function (BarberRestangular){
    return BarberRestangular.service('Barber');
  })
  .factory('ClientRestangular', function(Restangular){
    return Restangular.withConfig(function(RestangularConfigurer){
      RestangularConfigurer.setRestangularFields({id: '_id'});
    });
  })
  .factory('Client', function (ClientRestangular){
    return ClientRestangular.service('Client');
  })
  .factory('ServiceRestangular', function(Restangular){
    return Restangular.withConfig(function(RestangularConfigurer){
      RestangularConfigurer.setRestangularFields({id: '_id'});
    });
  })
  .factory('Service', function (ServiceRestangular){
    return ServiceRestangular.service('Service');
  })
  .factory('AppointmentRestangular', function(Restangular){
    return Restangular.withConfig(function(RestangularConfigurer){
      RestangularConfigurer.setRestangularFields({id: '_id'});
    });
  })
  .factory('Appointment', function (AppointmentRestangular){
    return AppointmentRestangular.service('Appointment');
  });
