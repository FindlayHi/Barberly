'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:shiftAddCtrl
 * @description
 * # shiftAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ShiftAddCtrl', function($scope, Shift, $location) {
    $scope.shift = {};
    $scope.saveshift = function() {
      Shift.post($scope.shift).then(function() {
        $location.path('/shifts');
      });
    };

  });
