'use strict';

describe('Controller: ServiceEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ServiceEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiceEditCtrl = $controller('ServiceEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServiceEditCtrl.awesomeThings.length).toBe(3);
  });
});
