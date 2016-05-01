'use strict';

describe('Controller: ClientViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ClientViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientViewCtrl = $controller('ClientViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClientViewCtrl.awesomeThings.length).toBe(3);
  });
});
