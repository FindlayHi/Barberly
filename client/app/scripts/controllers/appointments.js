'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AppointmentsCtrl
 * @description
 * # AppointmentsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AppointmentsCtrl', function($scope, Appointment, Restangular) {
    // $scope.appointmentsList = Appointment.getList().$object;
    Appointment.getList().then(function(results) {
      // console.log(results);
      angular.forEach(results, function(value, key) {
        value.client = Restangular.one('client', value.client).get().$object;
        value.service = Restangular.one('service', value.service).get().$object;
        value.barber = Restangular.one('barber', value.barber).get().$object;
        value.time = new Date(value.time);
      });
      // console.log(results);
      $scope.appointmentsList = results;
    });


  });
