'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AppointmentViewCtrl
 * @description
 * # AppointmentViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AppointmentViewCtrl', function($scope, $routeParams, Appointment, Restangular) {
    $scope.viewAppointment = true;
    Appointment.one($routeParams.id).get().then(function(result) {
      result.client = Restangular.one('client', result.client).get().$object;
      result.service = Restangular.one('service', result.service).get().$object;
      result.barber = Restangular.one('barber', result.barber).get().$object;
      $scope.appointment = result;
    });
  });
