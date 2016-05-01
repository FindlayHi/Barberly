'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BarberAddCtrl
 * @description
 * # BarberAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ServiceAddCtrl', function($scope, Service, $location) {
    $scope.service = {};
    $scope.saveService = function() {
      Service.post($scope.service).then(function() {
        $location.path('/services');
      });
    };

  });
