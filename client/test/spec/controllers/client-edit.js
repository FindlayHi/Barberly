'use strict';

describe('Controller: ClientEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ClientEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientEditCtrl = $controller('ClientEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClientEditCtrl.awesomeThings.length).toBe(3);
  });
});
