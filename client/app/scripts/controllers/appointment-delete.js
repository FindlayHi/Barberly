'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AppointmentDeleteCtrl
 * @description
 * # AppointmentDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AppointmentDeleteCtrl', function($scope, $routeParams, Appointment, $location) {
    $scope.appointment = Appointment.one($routeParams.id).get().$object;
    $scope.deleteAppointment = function() {
      $scope.appointment.remove().then(function() {
        $location.path('/appointments');
      });
    };
    $scope.back = function() {
      $location.path('/appointment/' + $routeParams.id);
    };
  });
