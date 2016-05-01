'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BarberlyCtrl
 * @description
 * # BarberlyCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('BarberlyCtrl', function($scope, Appointment, $location, Restangular) {

    Restangular.all('client').getList().then(function(results) {
      $scope.clients = results;
    });
    Restangular.all('service').getList().then(function(results) {
      $scope.services = results;
    });
    Restangular.all('barber').getList().then(function(results) {
      $scope.barbers = results;
    });

    $scope.client = {};
    // Set default to false unless checkbox is checked
    $scope.client.banned = false;

    $scope.saveClient = function() {

    };
    $scope.appointment = {};


    $scope.date = Date.now();

    // console.log($scope.date);

    $scope.saveAppointment = function() {
      Restangular.all('client').post($scope.client).then(function(r) {
        $scope.appointment.client = r._id;
        Appointment.post($scope.appointment).then(function() {
          $location.path('/confirmation');
        });
      });
    };
  });
