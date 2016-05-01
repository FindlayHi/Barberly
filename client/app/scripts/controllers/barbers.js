'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BarbersCtrl
 * @description
 * # BarbersCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('BarbersCtrl', function($scope, Barber, Restangular) {
    $scope.barberList = Barber.getList().$object;
  });
