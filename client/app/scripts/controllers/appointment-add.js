'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AppointmentAddCtrl
 * @description
 * # AppointmentAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AppointmentAddCtrl', function($scope, Appointment, $location, Restangular) {
    console.log('in appt add');
    $scope.appointment = {};

    Restangular.all('client').getList().then(function(results) {
      $scope.clients = results;
    });
    Restangular.all('service').getList().then(function(results) {
      $scope.services = results;
    });
    Restangular.all('barber').getList().then(function(results) {
      $scope.barbers = results;
    });
    $scope.date = Date.now();

    console.log($scope.date);

    $scope.saveAppointment = function() {
      Appointment.post($scope.appointment).then(function() {
        $location.path('/appointments');
      });
    };
  });
