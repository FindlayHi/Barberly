'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BarberDeleteCtrl
 * @description
 * # BarberDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('BarberDeleteCtrl', function($scope, $routeParams, Barber, $location) {
    $scope.barber = Barber.one($routeParam.id).get().$object;
    $scope.deleteBarber = function() {
      $scope.barber.remove().then(function() {
        $location.path('/barbers');
      });
    };
    $scope.back = function() {
      $location.path('/barber' + $routeParams.id);
    };
  });
