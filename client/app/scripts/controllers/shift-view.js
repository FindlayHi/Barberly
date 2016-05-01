'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:shiftViewCtrl
 * @description
 * # shiftViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ShiftViewCtrl', function($scope, $routeParams, Shift) {
    $scope.viewshift = true;
    $scope.shift = Shift.one($routeParams.id).get().$object;
  });
