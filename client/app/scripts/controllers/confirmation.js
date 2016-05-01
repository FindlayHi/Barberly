'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ConfirmationCtrl
 * @description
 * # ConfirmationCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ConfirmationCtrl', function($scope, $routeParams, Appointment, Restangular) {
    Appointment.getList().then(function(result) {
      //.toUTCString()
      $scope.appointment = result.pop();
      $scope.appointment.client = Restangular.one('client', $scope.appointment.client).get().$object;
      $scope.appointment.service = Restangular.one('service', $scope.appointment.service).get().$object;
      $scope.appointment.barber = Restangular.one('barber', $scope.appointment.barber).get().$object;

      // $scope.opt = {
      //   weekday: "long",
      //   year: "numeric",
      //   month: "short",
      //   day: "numeric",
      //   hour: "2-digit",
      //   minute: "2-digit"
      // };
      $scope.appointment.time = new Date($scope.appointment.time);
      // $scope.appointment.time = $scope.appointment.time.toLocaleTimeString("en-us", $scope.opt);
      //.toLocaleTimeString("en-us", $scope.opt);
      // console.log($scope.appointment);
      // console.log($scope.appointment.time.toLocaleTimeString("en-us", $scope.opt));
    });
  });
