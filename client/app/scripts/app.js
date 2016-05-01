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
      .when('/shifts', {
        templateUrl: 'views/shifts.html',
        controller: 'ShiftCtrl',
        controllerAs: 'shifts'
      })
      .when('/create/shift', {
        templateUrl: 'views/shift-add.html',
        controller: 'ShiftAddCtrl',
        // controllerAs: 'barbersAdd'
      })
      .when('/shift/:id', {
        templateUrl: 'views/shift-view.html',
        controller: 'ShiftViewCtrl',
        //controllerAs: 'barbers'
      })
      .when('/shift/:id/edit', {
        templateUrl: 'views/shift-edit.html',
        controller: 'ShiftEditCtrl',
        //controllerAs: 'barbers'
      })
      .when('/shift/:id/delete', {
        templateUrl: 'views/shift-delete.html',
        controller: 'ShiftDeleteCtrl',
        //controllerAs: 'barbers'
      })
      // From here up
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
      .when('/appointment/:id/edit', {
        templateUrl: 'views/appointment-edit.html',
        controller: 'AppointmentEditCtrl',
        controllerAs: 'appointmentEdit'
      })
      .when('/create/barber', {
        templateUrl: 'views/barber-add.html',
        controller: 'BarberAddCtrl',
        controllerAs: 'barberAdd'
      })
      .when('/barber/:id', {
        templateUrl: 'views/barber-view.html',
        controller: 'BarberViewCtrl',
        controllerAs: 'barberView'
      })
      .when('/barber/:id/edit', {
        templateUrl: 'views/barber-edit.html',
        controller: 'BarberEditCtrl',
        controllerAs: 'barberEdit'
      })
      .when('/barber/:id/delete', {
        templateUrl: 'views/barber-delete.html',
        controller: 'BarberDeleteCtrl',
        controllerAs: 'barberDelete'
      })
      .when('/client/:id', {
        templateUrl: 'views/client-view.html',
        controller: 'ClientViewCtrl',
        controllerAs: 'clientView'
      })
      .when('/client/:id/edit', {
        templateUrl: 'views/client-edit.html',
        controller: 'ClientEditCtrl',
        controllerAs: 'clientEdit'
      })
      .when('/client/:id/delete', {
        templateUrl: 'views/client-delete.html',
        controller: 'ClientDeleteCtrl',
        controllerAs: 'clientDelete'
      })
      .when('/service/:id/delete', {
        templateUrl: 'views/service-delete.html',
        controller: 'ServiceDeleteCtrl',
        controllerAs: 'serviceDelete'
      })
      .when('/service/:id/edit', {
        templateUrl: 'views/service-edit.html',
        controller: 'ServiceEditCtrl',
        controllerAs: 'serviceEdit'
      })
      .when('/service/:id', {
        templateUrl: 'views/service-show.html',
        controller: 'ServiceShowCtrl',
        controllerAs: 'serviceShow'
      })
      .when('/service/:id', {
        templateUrl: 'views/service-view.html',
        controller: 'ServiceViewCtrl',
        controllerAs: 'serviceView'
      })
      .when('/create/service', {
        templateUrl: 'views/service-add.html',
        controller: 'ServiceAddCtrl',
        controllerAs: 'serviceAdd'
      })
      .when('/appointment/:id', {
        templateUrl: 'views/appointment-view.html',
        controller: 'AppointmentViewCtrl',
        controllerAs: 'appointmentView'
      })
      .when('/appointment/:id/delete', {
        templateUrl: 'views/appointment-delete.html',
        controller: 'AppointmentDeleteCtrl',
        controllerAs: 'appointmentDelete'
      })
      .when('/create/appointment', {
        templateUrl: 'views/appointment-add.html',
        controller: 'AppointmentAddCtrl',
        controllerAs: 'appointmentAdd'
      })
      .when('/create/client', {
        templateUrl: 'views/client-add.html',
        controller: 'ClientAddCtrl',
        controllerAs: 'clientAdd'
      })
      .when('/barberly', {
        templateUrl: 'views/barberly.html',
        controller: 'BarberlyCtrl',
        controllerAs: 'barberly'
      })
      .when('/confirmation', {
        templateUrl: 'views/confirmation.html',
        controller: 'ConfirmationCtrl',
        controllerAs: 'confirmation'
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
