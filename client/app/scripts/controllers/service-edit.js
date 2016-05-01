'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ServiceEditCtrl
 * @description
 * # ServiceEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ServiceEditCtrl', function($scope, $routeParams, Service, $location) {
    $scope.editService = true;
    $scope.service = {};
    Service.one($routeParams.id).get().then(function(service) {
      $scope.service = service;
      $scope.saveService = function() {
        $scope.service.save().then(function() {
          $location.path('/service/' + $routeParams.id);
        });
      };
    });
  });
