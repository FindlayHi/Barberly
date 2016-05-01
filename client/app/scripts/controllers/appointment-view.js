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
    // $scope.appointment = Appointment.one($routeParams.id).get().$object;
    // console.log($scope.appointment);
    // $scope.appointment.client = Restangular.one('client', $scope.appointment.client).get().$object;
    // $scope.appointment.service = Restangular.one('service', $scope.appointment.service).get().$object;
    // $scope.appointment.barber = Restangular.one('barber', $scope.appointment.barber).get().$object;
    Appointment.one($routeParams.id).get().then(function(result) {
      console.log(result);
      result.client = Restangular.one('client', result.client).get().$object;
      result.service = Restangular.one('service', result.service).get().$object;
      result.barber = Restangular.one('barber', result.barber).get().$object;
      $scope.appointment = result;
    });
  });
