'use strict';

describe('Controller: BarberDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var BarberDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BarberDeleteCtrl = $controller('BarberDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BarberDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
