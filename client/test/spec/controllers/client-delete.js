'use strict';

describe('Controller: ClientDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ClientDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientDeleteCtrl = $controller('ClientDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClientDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
