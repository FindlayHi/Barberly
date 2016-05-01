'use strict';

describe('Controller: BarberlyCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var BarberlyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BarberlyCtrl = $controller('BarberlyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BarberlyCtrl.awesomeThings.length).toBe(3);
  });
});
