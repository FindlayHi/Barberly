'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ServicesCtrl', function ($scope, Service, Restangular) {
    $scope.serviceList = Service.getList().$object;
  });
