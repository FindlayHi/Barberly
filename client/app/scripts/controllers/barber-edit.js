'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BarberEditCtrl
 * @description
 * # BarberEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('BarberEditCtrl', function($scope, $routeParams, Barber, $location) {
    $scope.editBarber = true;
    $scope.movie = {};
    Barber.one($routeParams.id).get().then(function(barber) {
      $scope.barber = barber;
      $scope.saveBarber = function() {
        $scope.barber.save().then(function() {
          $location.path('/barber/' + $routeParams.id);
        });
      };
    });
  });
