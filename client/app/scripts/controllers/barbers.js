'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BarbersCtrl
 * @description
 * # BarbersCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('BarbersCtrl', function ($scope, Barber, Restangular) {
    Restangular.all('barber').getList().then(function(result) {
      $scope.babrerList = result;
    });
    // $scope.barberList = Barber.getList().then(function(result) {
    //   $scope.barberList = result;
    // });
      // $scope.barberList = Barber.getList().$object;
      console.log('in barber controller');
      console.log($scope.barberList);
  });
