'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ShiftCtrl
 * @description
 * # ShiftCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ShiftCtrl', function ($scope, Shift) {
      $scope.shiftList = Shift.getList().$object;
    });
