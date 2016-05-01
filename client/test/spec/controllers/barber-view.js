'use strict';

describe('Controller: BarberViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var BarberViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BarberViewCtrl = $controller('BarberViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BarberViewCtrl.awesomeThings.length).toBe(3);
  });
});
