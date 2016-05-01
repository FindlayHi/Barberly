'use strict';

describe('Controller: BarberAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var BarberAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BarberAddCtrl = $controller('BarberAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BarberAddCtrl.awesomeThings.length).toBe(3);
  });
});
