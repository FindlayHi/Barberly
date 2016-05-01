'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:shiftEditCtrl
 * @description
 * # shiftEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ShiftEditCtrl', function($scope, $routeParams, Shift, $location) {
    $scope.editshift = true;
    $scope.movie = {};
    shift.one($routeParams.id).get().then(function(Shift) {
      $scope.shift = Shift;
      $scope.saveshift = function() {
        $scope.shift.save().then(function() {
          $location.path('/shift/' + $routeParams.id);
        });
      };
    });
  });
