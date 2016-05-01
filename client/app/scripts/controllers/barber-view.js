'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BarberViewCtrl
 * @description
 * # BarberViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('BarberViewCtrl', function($scope, $routeParams, Barber) {
    $scope.viewBarber = true;
    $scope.barber = Barber.one($routeParams.id).get().$object;
  });
