'use strict';

describe('Controller: BarberEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var BarberEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BarberEditCtrl = $controller('BarberEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BarberEditCtrl.awesomeThings.length).toBe(3);
  });
});
