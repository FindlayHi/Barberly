'use strict';

describe('Controller: ServiceAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ServiceAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiceAddCtrl = $controller('ServiceAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServiceAddCtrl.awesomeThings.length).toBe(3);
  });
});
