'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BarberAddCtrl
 * @description
 * # BarberAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('BarberAddCtrl', function($scope, Barber, $location) {
    $scope.barber = {};
    $scope.saveBarber = function() {
      Barber.post($scope.barber).then(function() {
        $location.path('/barbers');
      });
    };
  });
