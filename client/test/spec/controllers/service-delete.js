'use strict';

describe('Controller: ServiceDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ServiceDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiceDeleteCtrl = $controller('ServiceDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServiceDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
