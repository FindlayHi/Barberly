'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ServiceDeleteCtrl
 * @description
 * # ServiceDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ServiceDeleteCtrl', function($scope, $routeParams, Service, $location) {
    $scope.service = Service.one($routeParams.id).get().$object;
    $scope.deleteService = function() {
      $scope.service.remove().then(function() {
        $location.path('/services');
      });
    };
    $scope.back = function() {
      $location.path('/service/' + $routeParams.id);
    };
  });
