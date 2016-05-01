'use strict';

describe('Controller: ShiftCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ShiftCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShiftCtrl = $controller('ShiftCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShiftCtrl.awesomeThings.length).toBe(3);
  });
});
