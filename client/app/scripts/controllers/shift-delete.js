'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:shiftDeleteCtrl
 * @description
 * # shiftDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ShiftDeleteCtrl', function($scope, $routeParams, Shift, $location) {
    $scope.shift = Shift.one($routeParams.id).get().$object;
    $scope.deleteshift = function() {
      $scope.shift.remove().then(function() {
        $location.path('/shifts');
      });
    };
    $scope.back = function() {
      $location.path('/shift' + $routeParams.id);
    };
  });
