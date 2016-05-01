'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AppointmentEditCtrl
 * @description
 * # AppointmentEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AppointmentEditCtrl', function($scope, $routeParams, Appointment, $location, Restangular) {
    $scope.editAppointment = true;
    $scope.appointment = {};
    Appointment.one($routeParams.id).get().then(function(appointment) {

      $scope.appointment = appointment;
      $scope.appointment.time = new Date(appointment.time);

      Restangular.all('client').getList().then(function(results) {
        $scope.clients = results;
      });
      Restangular.all('service').getList().then(function(results) {
        $scope.services = results;
      });
      Restangular.all('barber').getList().then(function(results) {
        $scope.barbers = results;
      });

      $scope.saveAppointment = function() {
        $scope.appointment.save().then(function() {
          $location.path('/appointment/' + $routeParams.id);
        });
      };
    });
  });
