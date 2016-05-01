'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ServiceViewCtrl
 * @description
 * # ServiceViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ServiceViewCtrl', function($scope, $routeParams, Service) {
    $scope.viewService = true;
    $scope.service = Service.one($routeParams.id).get().$object;
  });
